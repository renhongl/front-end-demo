

export class Adapter{
    getSingaporeCityData() {
        return {
            shenggang: {
                id: '0001',
                coordinate: [1.3312, 103.32423]
            },
            fenwei: {
                id: '0002',
                coordinate: [1.3221, 103.1212]
            },
            angmokio: {
                id: '0003',
                coordinate: [1.654, 103.32465423]
            }
        }
    }

    getFullSingaporeCityData() {
        return [
            {
                name: 'shenggang',
                id: '0001',
                coordinate: [1.3312, 103.32423],
                peopleCount: 10000
            },
            {
                name: 'fenwei',
                id: '0002',
                coordinate: [1.3312, 103.32423],
                peopleCount: 20000
            },
            {
                name: 'angmokio',
                id: '0003',
                coordinate: [1.3312, 103.32423],
                peopleCount: 30000
            }
        ]
    }

    dataAdapter(fn) {
        let ret = {};
        let list = fn();
        list.forEach(function(v, k) {
            let {name, ...props} = v;
            ret[name] = {...props};
        });
        return function() {
            return ret;
        }
    }
}
