const makeRole = (key: String, displayName: String, homeRoute: String) => ({
  key,
  displayName,
  homeRoute: [homeRoute],
});

export const RolesEnum = Object.freeze({
  MENTOR: makeRole("MENTOR", "Mentor", "/mentor/mentoria"),
  ADMIN: makeRole("ADMIN", "Admin", "/mentor/mentoria"),
  MENTEE: makeRole("MENTEE", "Mentorado", "/mentee/mentores"),
});
