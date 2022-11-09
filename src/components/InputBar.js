import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./css/InputBar.css";
import { connect } from "react-redux";
import { setTerm, addTask } from "../actions";

const InputBar = ({ term, setTerm, addTask }) => {
	const onSubmit = (event) => {
		event.preventDefault();
		if (term === "") return;
		addTask(term);
		setTerm("");
	};

	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "60ch" },
			}}
			noValidate
			autoComplete="off"
			onSubmit={onSubmit}
		>
			<div className="container">
				<div>
					<TextField
						required
						id="outlined-required"
						label="Add To-Do"
						onChange={(event) => setTerm(event.target.value)}
						value={term}
					/>
				</div>
				<div className="btn">
					<Button variant="contained" type="submit">
						Add
					</Button>
				</div>
			</div>
		</Box>
	);
};

const mapStateToProps = (state) => {
	return { term: state.term };
};

export default connect(mapStateToProps, { setTerm, addTask })(InputBar);
