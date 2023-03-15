# API Document  
  
Response formats: JSON  
  
## resouce-route  
prefix /resouces  
  
The resource object  
resource: {  
  "id": 1,  
  "user_id": 1,  
  "topic_id": 2,  
  "img_url": "http://",  
  "url": "http://",  
  "title": "crazy tech",  
  "description": "xxxx",  
  "avg_rating": 4,  
  "like": true (if NULL, means user could click it)  
}  
  
The comment object  
comment: {  
  "id": 1,  
  "user_id": 1,  
  "resource_id": 2,  
  "comment": "comment",  
}  
  
The like object  
like: {  
  "id": 1,  
  "user_id": 1,  
  "resource_id": 2,  
  "like":true,  
}  
  
The rate object  
rate: {  
  "id": 1,  
  "user_id": 1,  
  "resource_id": 2,  
  "rate":5,  
}  
  
.get /allresouces  
response: {[{resource1},{resource2}]}  
  
.get /myfavorites  
parameters:   
userId (from cookie)  
response: {[{resource1},{resource2}]}  
  
.get /myresources  
parameters:   
userId (from cookie)  
response: {[{resource1},{resource2}]}  
  
.get /allcomments/:resource_id  
request: resource_id  
response: {[{comment1}, {comment2}]}  
  
.post /addresource  
request: {resource} and userId  
response: {resource}  
  
.post /addcomment  
request: {comment} and userId  
response: {comment}  
  
.get /likeresource/:resource_id  
request: resource_id and userId  
response: a product object if a valid identifier was provided. {like}  
  
.get /rateresource/:resource_id/:rate  
request: rate resource_id and userId  
response: a product object if a valid identifier was provided. {rate}  

.post /searchresouce
request: {searchword} and userId
response: {[{resource1},{resource2}]} 
  
## user-route  
prefix /user  
  
.get /login/:id  
request: id  
response: redirect to the main page  
  
.post /register  
request: {user}  
response:{user}  
  
.post /logout  
request: userId  
response: redirect to the main page