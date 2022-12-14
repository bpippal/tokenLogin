# tokenLogin

Created a simple token based login server's ---> 

POST /login - <br />
{  <br />
 username : "Bharat"<br />
}
<br />
Generate's a jwtBased accessToken(with expiry time) along with a refreshtoken by passing the username as payload.
<br />
<br />
<br />
GET /posts
Authorization : Bearer jwtTokenGenerated
<br />
Used to get data by passing the token generated as a header.
<br />
<br />
<br />
POST /token - Used to refresh the accessToken with the refreshToken once the accessToken expiry is over.<br />
{<br />
  refreshToken : jwtRefreshTokenGenerated<br />
}
