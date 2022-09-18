// 继承和组合例子
const createPoop = (state) => ({
    poop(){
        state.weight -= 1
        console.log(`我在拉屎，体重变为 ${state.weight}`)
    }
})

// p = createPoop(({
//     weight: 100
// }))
// p.poop()

const createWang = (state) => ({
    wangwang() {
        console.log(`汪汪，我叫${state.name}`)
    }
})

// w = createWang({name:'小白'})
//
// w.wangwang()

const createDog = (name) => {
    const state = {name: name, weight: 100}
    return Object.assign({},
        createWang(state),
        createPoop(state)
    )
}
dog = createDog('小白')
dog.wangwang()
dog.poop()
