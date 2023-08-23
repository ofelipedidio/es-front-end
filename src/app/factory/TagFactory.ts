
import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class TagFactory {
    public make(
      nameTag: String,
      show: boolean
    ) {
      return {
        nameTag: [nameTag, Validators.required],
        show: [show, Validators.required],
      };
    }
  }
  