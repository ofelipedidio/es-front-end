export class RoutingProxy {
  public routing(
    isMentor: boolean,
    isMentee: boolean,
    isAdmin: boolean
  ): String[] {
    if (isMentee) {
      return ["/mentee/mentores"];
    } else if (isMentor) {
      return ["/mentorias"];
    } else if (isAdmin) {
      return ["/admin/relatorio"];
    }
    return [];
  }
}
