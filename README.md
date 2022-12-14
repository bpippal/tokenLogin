# tokenLogin

Created a simple token based login server's ---> 

POST /login - 
{  
 username : "Bharat"
}

Generate's a jwtBased accessToken(with expiry time) along with a refreshtoken by passing the username as payload.



GET /posts
Authorization : Bearer jwtTokenGenerated

Used to get data by passing the token generated as a header.



POST /token - Used to refresh the accessToken with the refreshToken once the accessToken expiry is over.
{
  refreshToken : jwtRefreshTokenGenerated
}
