import { TestBed } from "@angular/core/testing";
import { MentoresService } from "./mentores.service";

describe("MentoresServiceService", () => {
  let service: MentoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentoresService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
