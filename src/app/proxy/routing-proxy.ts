import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class RoutingProxy {
  public routing(
    isMentor: boolean,
    isMentee: boolean,
    isAdmin: boolean = false
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
  public routeBasedOnRole(role: String): String[] {
    switch (role) {
      case "MENTOR":
        return ["/mentor/mentoria"];
      case "ADMIN":
        return ["/admin/relatorio"];
      case "MENTORADO":
        return ["mentee/mentores"];
      default:
        return [];
    }
  }
}
