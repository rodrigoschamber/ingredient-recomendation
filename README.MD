# Active Ingredient Builder

## Deploying the backend at Google Cloud Platform:

### Create an image and push it to the artifact registry:

`cd backend`

`gcloud auth configure-docker us-central1-docker.pkg.dev`

`docker build -t gcr.io/{GOOGLE_CLOUD_PROJECT}/ingredientbuilder:latest .`

`docker push gcr.io/{GOOGLE_CLOUD_PROJECT}/ingredientbuilder:latest `

### Create a service account:

`gcloud iam service-accounts create ingredient-builder \
  --display-name="Ingredient Builder"`

`gcloud projects add-iam-policy-binding ${GOOGLE_CLOUD_PROJECT} \
  --member="serviceAccount:ingredient-builder@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com" \
  --role="roles/aiplatform.user"`

### Deploy the application

`gcloud run deploy ingredientbuilder --image=gcr.io/${GOOGLE_CLOUD_PROJECT}/[IMAGE_NAME] --allow-unauthenticated --port=5002 --service-account=ingredient-builder@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com --min-instances=1 --max-instances=1 --no-cpu-throttling --region=us-central1 --project=${GOOGLE_CLOUD_PROJECT}`

## Deploying the frontend at Google Cloud Platform:

### Deploy the application

`cd frontend`

`npm run build`

`firebase deploy`
