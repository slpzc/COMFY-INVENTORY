Vue.directive('aleksey-chekunov-side', {
    bind: function (el, binding, vnode) {
        this.event = function (event) {
            if (!(el == event.target || el.contains(event.target) || event.target.className === "select2-selection__choice__remove")) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', this.event)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', this.event)
    },
});

new Vue({
    el: '#app',
    data() {
        return {
            items: [
                {
                    name: 'Аптечка', // !нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 1, // !id предмета
                    canTo: 10 // !В какие слоты может встать
                },
                {
                    name: 'Бургер',
                    col: 1,
                    type: 'X',
                    id: 2,
                    canTo: 1
                },
                {
                    name: 'SMG',
                    col: 1,
                    type: 'X',
                    id: 23,
                    canTo: [13, 14, 15]
                },
                {
                    name: 'Рубашка',
                    col: 1,
                    type: 'X',
                    id: 3,
                    canTo: 3
                },
                {
                    name: 'Шапка',
                    col: 2,
                    type: 'X',
                    id: 4,
                    canTo: 11
                },
                {
                    name: 'Джинсы',
                    col: 3,
                    type: 'X',
                    id: 5,
                    canTo: 7
                },
                {
                    name: 'Очки',
                    col: 1,
                    type: 'X',
                    id: 6,
                    canTo: 11
                },
                {
                    name: 'Патроны',
                    col: 357,
                    type: false,
                    id: 7
                },
                {
                    name: 'Часы',
                    col: 1,
                    id: 8,
                    canTo: 5,

                },
                {
                    name: 'Перчатки',
                    col: 1,
                    canTo: 6
                },
                {
                    name: 'Портфель',
                    col: 1,
                    canTo: 12
                },

            ],
            food: 28, // ! сколько еды: минимум 0, максимум 100
            water: 90, // ! сколько воды: минимум 0, максимум 100
            maxKgBag: 7, // !максимально кг в рюкзаке
            kgBag: 5, // !Сколько кг сейчас в рюкзаке
            bagItems: [{
                    name: 'Вино', //!нэйм
                    col: 22, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 1, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Часы', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 8, // !id предмета
                    canTo: 5, // !В какие слоты может встать,
                },
                {
                    name: 'Бумбокс', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 8, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Ключи', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 9, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Ключи от автомобиля', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 10, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Кальян', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 11, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Табак', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 12, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Яблоко', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 17, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Мороженое', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 20, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
                {
                    name: 'Салат', //!нэйм
                    col: 1, // !количество
                    type: 'X', // !тип для количества. Пример: x3 Аптечки или 3л Молока.
                    id: 16, // !id предмета
                    canTo: 6, // !В какие слоты может встать,
                },
            ],
            IDitemsLIST: {
                1: "Аптечка",
                2: "Бургер",
                3: "Рубашка",
                4: "Шапка",
                5: "Джинсы",
                6: "Очки",
                7: "Патроны",
                8: "Бумбокс",
                9: "Ключи",
                10: "Ключи от автомобиля",
                11: "Кальян",
                12: "Табак",
                13: "Пицца",
                14: "Чипсы",
                15: "Молоко",
                16: "Салат",
                17: "Яблоко",
                18: "Арбуз",
                19: "Груша",
                20: "Мороженое",
                21: "Часы",
                22: "Вино",
            },
            whatActive: null, // !активная дрисня или же айтем
            slots: [{
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {
                    name: ''
                },
                {},
                {},
                {}
            ],
            gunSlots: [
                {},
                {},
                {}
            ]
        }
    },
    methods: {
        toInventory(item) { // !из рюкзака в основные предметы(инвентарь)
            if(this.items.some((el) => el.name === item.name)){
                for (let index = 0; index < this.items.length; index++) {
                    const element = this.items[index];
                    if(element.name === item.name){
                        element.col++
                    }
                }
                this.bagItems.splice(this.bagItems.indexOf(item), 1)
                return;
            }
            this.bagItems.splice(this.bagItems.indexOf(item), 1)
            this.items.unshift(item)
        },
        toInventoryFromGunSlots(item){
            if(this.items.some((el) => el.name === item.name)){
                for (let index = 0; index < this.items.length; index++) {
                    const element = this.items[index];
                    if(element.name === item.name){
                        element.col++
                    }
                }
                this.items.unshift(item)
                this.slots[this.slots.indexOf(item)] = {}
            }else{
                this.items.unshift(item)
                this.slots[this.slots.indexOf(item)] = {}
            }
        },
        toBag(block, mode) { // !ложим в рюкзак предмет
            if (this.bagItems.length == 10) {
                return;
            }
            if (mode == 1) {
                this.items.splice(this.items.indexOf(block), 1)
            } else if (mode == 2) {
                console.log(block)
                this.slots[this.slots.indexOf(block)] = {
                    name: ''
                }
            }
            this.bagItems.unshift(block)
        },
        tek(num) { // !Проверяем, можно ли разрешать выпад окошка "снять" на человеке, чтобы снять одежду
            if (this.slots[num].name == '') {
                console.log('пустой слот')
                return;
            }
            this.whatActive = this.slots[num]
        },
        unSet(block) { // !после метода tek (на параграфе "p"). Метод, чтобы убрать эту вещь с персонажа обратно в инвентарь
            if (this.items.some((el) => el.name === block.name)) {
                for (let index = 0; index < this.items.length; index++) {
                    const element = this.items[index];
                    if (element.name == block.name) {
                        element.col++; // ! element.col += block.col вызвал бы дюп айтемов, попробуй
                        // дюп происходит из-за -1 количества у предмета.
                        // т.е мы имеем одну копию в слоте, а другую в items
                        // а когда возвращаем - присваиваем только 1, чтобы не вызвать дюп
                    }
                }
                // ?Но зачем мы делаем for, если могли как ниже найти индекс похожего блока?
                // !Дело в том, что мы бы не нашли такой же блок и вот почему:
                // !Представь джинсы с количеством 11, когда мы их возвращаем - мы не сможем найти похожий блок
                // ! Т.к на человеке у нас всегда айтем -1. Тогда мы и получаем, что
                // ! количество 11 не равно числу 1 :)
                this.slots[this.slots.indexOf(block)] = {
                    name: ''
                };
                return;
            }
            this.items.unshift(block);
            this.slots[this.slots.indexOf(block)] = {
                name: ''
            };
        },
        usePod(block, typeOperation) { // !использование предмета
            if (typeOperation == 1) {
                this.items.splice(this.items.indexOf(block), 1);
                console.log('ЮЗАЮ', block)
            }
        },
        toSlot(block, to, typeOperation) { // !В слоты
            let t = this;
            if (typeOperation == 1) {
                if (t.slots[to - 1].name == block.name) {
                    return;
                }
                if (block.col > 1) {
                    block.col -= 1
                    itemsUnshift(block)
                    return;
                }
                this.items.splice(this.items.indexOf(block), 1)
                itemsUnshift(block)
            } else if (typeOperation == 2) {
                this.bagItems.splice(this.bagItems.indexOf(block), 1)
                if (this.slots[to - 1].name != '') {
                    this.items.unshift(this.slots[to - 1])
                    this.slots[to - 1] = {
                        ...block
                    }
                    return;
                } else {
                    this.slots[to - 1] = {
                        ...block
                    }
                }
            }

            function itemsUnshift(block) {
                if (t.slots[to - 1].name != '' && t.slots[to - 1].name != undefined) {
                    t.items.unshift(t.slots[to - 1])
                    t.slots[to - 1] = {
                        name: block.name,
                        type: block.type,
                        col: 1,
                        id: block.id,
                        canTo: block.canTo
                    }
                    return;
                } else {
                    t.slots[to - 1] = {
                        name: block.name,
                        type: block.type,
                        col: 1,
                        id: block.id,
                        canTo: block.canTo
                    }
                }
            }
        },
        outside() { // ! метод для сброса активного элемента
            this.whatActive = null;
        },
        leave(index, typeOperation) { // !выкинуть предмет
            if (typeOperation == 1) {
                this.items.splice(index, 1);
            } else if (typeOperation == 2) {
                this.bagItems.splice(index, 1);
            }
            else if (typeOperation == 3) {
                this.slots[index] = {}
            }
        },
        ruk() { // !для заполнения полукруга у рюкзака
            this.$refs.ruk.style.strokeDasharray = `${this.bag * 1542.81 / 10} 2763.91`
        },
        gunSetActive(block){
            if(block.name == undefined){
                return;
            }
            this.whatActive = block
        }
    },
    mounted() {
        this.ruk()
        document.addEventListener('click', this.whatActive = null)
    },
    watch: {
        bag() {
            this.ruk()
            if (this.kgBag < 0) {
                this.kgBag = 0
            } else if (this.kgBag > this.maxKgBag) {
                this.kgBag = this.maxKgBag
            }
        },
        slotsCopy(newSlots, oldSlots) {
            if (newSlots[11] !== oldSlots[11]) {
                this.ruk()
            }
        }
    },
    computed: {
        bag() {
            return 10 - this.bagItems.length
        },
        percentec() {
            let food = this.food * 182 / 100
            let water = this.water * 182 / 100
            return {
                food,
                water
            }
        },
        length() {
            return this.items.length
        },
        slotsCopy() {
            return this.slots
        }
    },
})
// !434 строчки кода в скриптах. UwU