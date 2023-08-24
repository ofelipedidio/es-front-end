import { RoutingProxy } from "./../../proxy/routing-proxy";
import { UserFormGroupFactory } from "./../../factory/UserFormGroupFactory";
import { LoginService } from "./../../services/login.service";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { TagProperty, UserModel } from "src/app/models/user-model";
import { Router } from "@angular/router";
import { TagsServiceService } from '../../services/tags.service.service';

@Component({
    selector: "app-register-view",
    templateUrl: "./register-view.component.html",
    styleUrls: ["./register-view.component.scss"],
})
export class RegisterViewComponent implements OnInit {
    registerForm: FormGroup;
    confirmPassword = "";
    separatorKeysCodes: number[] = [ENTER, COMMA];
    experiences: string[] = [];

    items: TagProperty[] = [];
    selectedItems: TagProperty[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private loginService: LoginService,
        private router: Router,
        private formFactory: UserFormGroupFactory,
        private routingProxy: RoutingProxy,
        private tagService: TagsServiceService,
    ) {
        this.registerForm = this.formBuilder.group(
            this.formFactory.make("", "", "", "", new Date(), "Mentorado", "")
        );
    }

    ngOnInit(): void {
        this.tagService.getAllTreatedTags().subscribe(data => {
            this.items = data.sort((a, b) => a.nameTag >= b.nameTag ? 1 : -1);
        });
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            alert("Por favor preencha todos os campos necessários");
            return;
        }

        if (
            this.registerForm.value.password !==
            this.registerForm.value.confirmPassword
        ) {
            alert("As senhas devem ser iguais!");
            return;
        }

        const registerForm = this.registerForm.value;
        const isMentor = registerForm.accountType === "Mentor";
        const user = new UserModel(
            registerForm.email,
            "",
            "",
            registerForm.name,
            registerForm.birthDate,
            isMentor,
            !isMentor,
            registerForm.password,
            registerForm.phone,
        );
        if (isMentor) {
            if (this.selectedItems.length <= 0) {
                alert("Mentores devem possuir ao menos uma tag de experiência!");
                return;
            }
            user.tags = this.selectedItems.map(x => x.nameTag);
            user.cargo = registerForm.cargo;
        }
        this.loginService.register(user).subscribe({
            next: (response) => {
                console.log(response);
                this.userService.setUser(user, isMentor, !isMentor);
                this.router.navigate(this.routingProxy.routing(isMentor, !isMentor));
            },
            error: (err) => {
                if (err.status == 409) {
                    alert("Uma conta com esse mail já foi cadastrada!");
                }
                return;
            },
        });
    }

    onAccountTypeChange() {
        const accountType = this.registerForm.value.accountType;

        if (accountType === "Mentor") {
            this.registerForm
            .get("experiences")
                ?.setValidators([Validators.required]);
                this.registerForm.get("cargo")?.setValidators([Validators.required]);
        } else {
            this.registerForm.get("experiences")?.clearValidators();
            this.registerForm.get("cargo")?.clearValidators();
        }

        this.registerForm.get("experiences")?.updateValueAndValidity();
        this.registerForm.get("cargo")?.updateValueAndValidity();
    }

    addExperience(event: MatChipInputEvent): void {
        const input = event.chipInput.inputElement;
        const value = event.value;

        if ((value || "").trim() && !this.experiences.includes(value.trim())) {
            this.experiences.push(value.trim());
        }

        if (input) {
            input.value = "";
        }
    }

    removeExperience(experience: string): void {
        const index = this.experiences.indexOf(experience);

        if (index >= 0) {
            this.experiences.splice(index, 1);
        }
    }

    onSelectionChange(item: TagProperty|null): void {
        if (item == null) {
            return;
        }
        this.selectedItems.push(item);
    }

    removeItem(item: TagProperty): void {
        const index = this.selectedItems.indexOf(item);
        if (index >= 0) {
            this.selectedItems.splice(index, 1);
        }
    }

    getTag(name: String): TagProperty|null {
        for (const tag of this.items) {
            if (tag.nameTag == name) {
                return tag;
            }
        }
        return null;
    }
}
