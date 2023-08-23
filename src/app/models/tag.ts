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
  }

export interface Tag {
    nameTag: String,
    treated: boolean
}
