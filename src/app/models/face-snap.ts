import { SnapType } from './snap-types.type';
export class FaceSnap {

    location?: string;
    id: string;

    constructor(public title: string, public description: string, public createdDate: Date, public snaps: number, public imageUrl:string) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

    addSnap() {
        this.snaps++;
    }

    removeSnap() {
        this.snaps--;
    }

    snap(SnapType: SnapType) {
        if (SnapType === 'snap') {
            this.addSnap();
        } else if (SnapType === 'unSnap') {
            this.removeSnap();
        }
    }

    setLocation(location: string) {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}