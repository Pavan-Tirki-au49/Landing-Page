import { Play, Plus } from 'lucide-react';
import '../App.css';

const Row = ({ title, movies }) => {
    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>

            <div className="row-posters">
                {movies.map((movie) => (
                    <div key={movie.id} className="poster-wrapper">
                        <div
                            className="poster-card"
                            style={{
                                backgroundImage: `url(${movie.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="poster-overlay">
                                <div className="poster-content">
                                    <h4 className="poster-title">{movie.title}</h4>
                                    <div className="poster-actions">
                                        <div className="icon-circle small">
                                            <Play size={12} fill="black" stroke="black" />
                                        </div>
                                        <div className="icon-circle small transparent">
                                            <Plus size={16} color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="visible-title">{movie.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Row;
