import { Router } from "express"
import { awsController } from "../controller/aws-controller";
import { firebaseController } from "../controller/firebase-controller";
import { mapboxController } from "../controller/mapbox-controller";
import { commonController } from "../controller/common-controller";
import {multipleFilesMultiParser} from "../utilities/multer-utilities";

const router: Router = Router();

//aws routes
router.get("/get-bucket-list-object", awsController.getBucketListObjects);
router.post("/process-the-file-list-and-save-them-into-bucket", awsController.processFilesListAndSaveThemIntoBucket);
router.post("/upload-files-into-bucket", awsController.uploadFilesIntoBucket);
//firebase routes
router.get("/get-all-firebase-collections", firebaseController.getAllFirebaseCollections);
router.get("/delete-unnecessary-firebase-documents", firebaseController.deleteUnnecessaryFirebaseDocuments);
router.get("/create-firebase-geo-json-documents", firebaseController.createFirebaseGeoJsonDocumentsFromReports)
router.get("/rewrite-firebase-collections-photo-path", firebaseController.rewriteFirebaseCollectionsPhotoPath);
//aws and firebase routes
router.post("/upload-files-on-server", multipleFilesMultiParser, commonController.uploadFilesOnServer);
router.post("/upload-files-on-server/chunks", commonController.uploadFilesOnServerByChunks);
//mapbox
router.get("/get-mapbox-geo-json", mapboxController.getMapboxGeoJsonData);


export {
    router
}