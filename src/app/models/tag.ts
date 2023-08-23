import { TagProperty } from "./user-model";

export class TagModel implements Tag {
    nameTag: String;
    treated: boolean;
  
    constructor(
        nameTag: String,
        treated: boolean,

    ) {
      this.nameTag = nameTag;
      this.treated = treated;
    }

    static convertPayload(tagPayload: TagProperty[]): TagModel[] {
      const tags: TagModel[] = [];
      console.log("listatotal:");
      console.log(tagPayload);
      tagPayload.forEach((tag) => {
        tags.push(new TagModel(tag.nameTag, tag.treated));
      });
      return tags;
    }
  }

export interface Tag {
    nameTag: String,
    treated: boolean
}
