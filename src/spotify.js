
// THIS FILE IS HAVING SPOTIFY DO ALL THE AUTHORIZATIONS

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// WHEN THEY CLICK TH ELOGIN TO SPOTIFY BUTTON, REDIRECTED TO SPOTIFY AUTHORIZATION PAGE
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "74c78ba5abce4ff9857f13db138786e7";
// AFTER AUTHORIZATION IF SUCCEEDED WILL BE SENT TO THIS ENDPOINT (HOME)
const redirectUri = "http://localhost:3000/";
// BYPASSIGN CRUD FUNCTIONALITY (GIVING SPECIFIC PERMISSIONS)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    // FINDS THE POSITION OF THE HASH IN THE URL
    return window.location.hash
        .substring(1)
        // GRABBING THE POINT OF THE URL FROM THE FIRST HASH (#) TO TH EFIRST (&)
        .split("&")
        .reduce((initial, item) => {
            // #acessToken=mysupersecretkey&name=john&abc
            // ONLY GRABS (#acessToken=mysupersecretkey&) OUT OF URL
            var parts = item.split("=");
            // SPLIT GRABBED PORTION INTO 2 PARTS
            initial[parts[0]] = decodeURIComponent(parts[1]);
            // FOR THE (accessToken) GRAB THE (mysupersecretkey)
            // WHOLE POINT IS TO PULL THE access token
            return initial;
        }, {});
};

// ONCE AUTHORIZATION IS DONE, GIVE ME BACK A TOKEN (YOUR PASS TO PROVE WHO YOU SAY YOU ARE)
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;