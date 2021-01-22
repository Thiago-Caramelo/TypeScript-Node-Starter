import request from "supertest";
import app from "../src/app";

describe("GET /api", () => {
    it("should return 403 OK", () => {
        return request(app).get("/api")
            .expect(403);
    });
});
