// hooks
import { useEffect } from "react";
import { loadPosts } from "../api/load-posts";

// templates
import Home from "../templates/Home";

export default function Index() {
	useEffect(() => {
		loadPosts({
			authorSlug: {
				eq: "edson-valenca",
			},
		}).then((r) => console.log(r));
	});
	return <Home />;
}
