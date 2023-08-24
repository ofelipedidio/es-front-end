import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";



import { TagFactory } from "./../../factory/TagFactory";




import { Router } from "@angular/router";

import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TagsServiceService } from "src/app/services/tags.service.service";
import { TagModel } from "src/app/models/tag";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-admtag',
  templateUrl: './admtag.component.html',
  styleUrls: ['./admtag.component.scss']
})
export class AdmtagComponent {

  myFormControl = new FormControl();
  registerForm: FormGroup;
  show: boolean = false;
  nameTag: String = "";
  treated: boolean = false;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private tagService: TagsServiceService,

    private formBuilder: FormBuilder,
    private formFactory: TagFactory,
    private snackBar: MatSnackBar,
    private service: TagsServiceService
  ) {
    this.registerForm = this.formBuilder.group(
      this.formFactory.make("empty", false)
    );

    tagService.getUntreatedTags().subscribe((tags) => {
      console.log(TagModel.convertPayload(tags));
      this.dataSource = new MatTableDataSource(TagModel.convertPayload(tags));

      console.log(this.dataSource);
    });
  }


  inConstructor(tagService: TagsServiceService) {
    tagService.getUntreatedTags().subscribe((tags) => {
      this.dataSource = new MatTableDataSource(TagModel.convertPayload(tags));
    });
  }

  displayedColumns: string[] = ["tag", "aceitar"];

  accept(nameTag: String) {
    this.service.acceptTag(new TagModel(nameTag, false)).subscribe();
    location.reload();
  }

  deleteT(nameTag: String) {
    this.service.deleteTag(new TagModel(nameTag, false)).subscribe();
    location.reload();
  }
}
