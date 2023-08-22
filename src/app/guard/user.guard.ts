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
  const router = inject(Router);
  if (!userService.getUser() && !userService.getRole()) {
    router.navigate(["login"]);
    return true;
  }
  const newRoute = inject(RoutingProxy).routeBasedOnRole(
    userService.getRole() || ""
  );
  router.navigate(newRoute);
  return false;
};
