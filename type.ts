export type CardForEpicType = {

    image: string;
    date: string;
    caption: string;

    centroid_coordinates: {
        lat: number;
        lon: number;
    };

    dscovr_j2000_position: {
        x: number;
        y: number;
        z: number;
    };


    lunar_j2000_position: {
        x: number;
        y: number;
        z: number;
    };

    sun_j2000_position: { x: number; y: number; z: number };

    attitude_quaternions: {
        q0: number;
        q1: number;
        q2: number;
        q3: number;

    }

};

