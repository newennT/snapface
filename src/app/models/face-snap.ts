export class FaceSnap {
    constructor(public title: string, public description: string, public createdDate: Date, public snaps: number, public imageUrl: string) {
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.imageUrl = imageUrl;
    }

    addSnap() {
        this.snaps++;
    }

    removeSnap() {
        this.snaps--;
    }
}