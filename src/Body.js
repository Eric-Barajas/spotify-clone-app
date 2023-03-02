import React, { useEffect } from 'react';
import Header from './Header';
import './Body.css';
// import axios from "axios";
import { useDataLayerValue } from "./DataLayer";
import SongRow from './SongRow';
// import { MoreHorizIcon, PlayCircleFilledIcon, FavoriteIcon} from '@mui/icons-material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Body = ({ spotify }) => {
    const [{ discover_weekly, hits }, dispatch] = useDataLayerValue();

    console.log("THis could be BIG -_______________________", spotify);
    console.log("this is the Discoever weekly thign", discover_weekly);

    // const encodedParams = new URLSearchParams();
    // encodedParams.append("accessToken", "BQBayLJRCtbJmXA1SMMxm9lY8UU3rQxOpywyCeTPM6HGUbPj3kAPkCIQISRNeVqwbqLqkfOktO1fm10navcZtHkvie03Zqjf5Zn6Wg0TrU2yQ-kJb1vGs7mE2HjxvnZnOZRE9vivNNwU_c90mOdFMPEtxQypUSZcFlbF_oZCgpIOb84bjo2va-e_Z8sYmBnuMbGV");
    // encodedParams.append("albumIds", "<REQUIRED>");

    // const options = {
    //     method: 'POST',
    //     url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/getAlbums',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'X-RapidAPI-Key': '3349990788msh388664143710c09p138db8jsn1f85a7af5681',
    //         'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com'
    //     },
    //     data: encodedParams
    // };

    // useEffect(() => {
    //     axios.request(options).then(function (response) {
    //         console.log(":-) FROM AXIOS", response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, [])

    // useEffect(() => {
    //     axios.get(options)
    //         .then(res => {
    //             console.log("IT WORKED HOPEFULLY", res.data);
    //         }).catch(err => {
    //             console.log("IT FAILED I CRY", err);
    //         })
    // }, [])


    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                <img
                    src={discover_weekly?.images[0].url}
                    alt="Discover Weekly"
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            {/* <div className="body__top">
                <h1>Featured Charts</h1>
                <img
                    src={discover_weekly?.images[0].url}
                    alt="Discover Weekly"
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div> */}

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon className='body__shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} playSong={item.playSong} />
                ))}
            </div>
        </div>
    )
}

export default Body;