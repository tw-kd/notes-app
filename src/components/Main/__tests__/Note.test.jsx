import { render, screen } from "@testing-library/react";
import Note from "../Note";

test("should render note with content", () => {
	render(
		<Note
			title="Personal Note"
			text="Hi, I'm a note."
			editedDate={new Date(2025, 1, 3)}
		/>
	);

	const title = screen.getByText("Personal Note");
	expect(title).toBeInTheDocument();

	const text = screen.getByText("Hi, I'm a note.");
	expect(text).toBeInTheDocument();

	const date = screen.getByText(/last edited on:/i);
	expect(date).toHaveTextContent("03/02/2025");
});
