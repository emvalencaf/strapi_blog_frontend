import { mapDataGraphQL } from "./map-load-posts";

import { mockResponseLoadPost, mockResponseRequest } from "./mock";

describe("map-load-post", () => {
	it("should map a reponse request object as a load-posts response object", () => {
		const object = mapDataGraphQL(mockResponseRequest);

		expect(object).toEqual(mockResponseLoadPost);
	});
});
