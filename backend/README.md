# we have a bug

## todo
* [x] Create a new Company entity
* [x] Create a new Company controller
* [x] The controller should be able to create a new company
*    [x] Also assign users from the users table by ID
*[x] The controller should be able to list all companies
*    [x] and related users
* [x] The controller should be able to delete a company
* [x] remove the relations but not the users


## Customer Question

> "The customer is very happy that they can upload and download documents in our platform but they also have a need to apply an e-signature to the PDF files. They would like their username, email and the current date applied to the PDF document when they click the "Sign" button on the selected file's UI."

* The client wants their username, email and current date applied to the PDF when they Sign

#### Frontend

Assumming the upload of the documents already exists, and the system is using something like JWT for authentication.
When the document is "Sign" it should upload the document to the API.

If I understood correctly, nothing extra is needed on the frontend.

#### Backend
The backend using the JWT already knows which user is uploading/signing the document.

We Need a `document` table: (assuming part of it already exists, but new fields should be added) 

Documents DB Table
`id` | `s3Path` | `userId` | `email` | `createdAt` | `updatedAt`

When the API receives the request to upload the document, it should:
* create an entry on the `document` table with the following information:
  * `userId` - user that signed the document
  * `email` - email of that specific user at the time of the sign (current email)
  * `createdAt` - date of "Sign"
* It should generate the PDF with the "Signed Signal (user name/date)" (in case its need, did not understood that part)
* Should upload that pdf version to an S3 bucket
* Should update the field `s3Path` in  `document` with the path to the location of the S3 storage
* Should return success or failure of the operation
* Maybe if it allows of that pdf to be updated and it would need to re-signed,
    it would be good to have a versioning of the pdf on S3, and the logic update of the path to the file if needed, using
