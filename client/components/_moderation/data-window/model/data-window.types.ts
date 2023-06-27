import {DocumentData, QueryDocumentSnapshot} from "firebase/firestore";

export interface ModerationDataWindowSchema {
    searchBarText: string
    firebaseReports: QueryDocumentSnapshot<DocumentData>[] | undefined
    dbUsers: QueryDocumentSnapshot<DocumentData>[],
    firstVisibleDoc: any,
    lastVisibleDoc: any
    reportsCount: number | undefined
}