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
      return RolesEnum.MENTEE.homeRoute;
    } else if (isMentor) {
      return RolesEnum.MENTEE.homeRoute;
    } else if (isAdmin) {
      return RolesEnum.ADMIN.homeRoute;
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
