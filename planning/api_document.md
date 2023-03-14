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

}

.get /allresouces
response: [{resource1},{resource2}]

.get /myfavorites
parameters: 
userId (from cookie)
response: [{resource1},{resource2}]

.get /myresources
parameters: 
userId (from cookie)
response: [{resource1},{resource2}]

.post /addresource
request: {resource}
resource: {
  id: 1,
  user_id: 1,
  topic_id: 2,
  img_url: http://,
  url: http://,
  title: "crazy tech",
  description: "xxxx"
}

