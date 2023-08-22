import { Injectable } from "@angular/core";
import { RolesEnum } from "../enum/role";
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
      return RolesEnum.MENTOR.homeRoute;
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
        return ["/mentee/mentores"];
      case "ADMIN":
        return ["/admin/relatorio"];
      case "MENTORADO":
        return ["mentee/mentores"];
      default:
        return [];
    }
  }
}
