import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class RoutingProxy {
  public routing(
    isMentor: boolean,
    isMentee: boolean,
    isAdmin: boolean
  ): String[] {
    if (isMentee) {
      return ["/mentee/mentores"];
    } else if (isMentor) {
      return ["/mentor/mentoria"];
    } else if (isAdmin) {
      return ["/admin/relatorio"];
    }
    return [];
  }
}
