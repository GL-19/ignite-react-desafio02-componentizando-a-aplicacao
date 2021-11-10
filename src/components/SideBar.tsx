import { Button } from "./Button";
import "../styles/sidebar.scss";

interface Genre {
	id: number;
	name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
	title: string;
}

interface SideBarProps {
	genres: Genre[];
	selectedGenreId: number;
	onClick: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
	const { genres, selectedGenreId, onClick } = props;

	return (
		<nav className="sidebar">
			<span>
				Watch<p>Me</p>
			</span>

			<div className="buttons-container">
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => onClick(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}
