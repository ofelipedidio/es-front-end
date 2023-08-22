import { UserService } from "src/app/services/user.service";
import { inject, Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { RoutingProxy } from "../proxy/routing-proxy";

export const userGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const user = userService.getUser();
  if (!user && !userService.getRole()) {
    return true;
  }
  const newRoute = inject(RoutingProxy).routeBasedOnRole(
    userService.getRole() || ""
  );
  inject(Router).navigate(newRoute);
  return false;
};
