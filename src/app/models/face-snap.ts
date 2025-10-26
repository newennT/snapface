export class FaceSnap {

    location?: string;

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

    setLocation(location: string) {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}