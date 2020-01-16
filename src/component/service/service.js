// 1. record
// 2. all task
// 3. delete
// 4. changes
export default class ServiseStorage {
    Register(item) {
        try {
            const oldItems = JSON.parse(localStorage.getItem("tasks"));
            if (oldItems == null) {
                console.log('ПУСТО');
                const items = {"Todos": [item]};
                const obj = JSON.stringify(items);

                localStorage.setItem(`tasks`, obj)
            } else {

                oldItems.Todos.push(item);
                const newItems = JSON.stringify(oldItems);

                localStorage.setItem(`tasks`, newItems)
            }
        } catch (e) {
            if (e === "QUOTA_EXCEEDED_ERR") {
                alert('Превышен лимит');
            }
        }
    }
    AllItemsStorage() {
        try {
            const allItems = JSON.parse(localStorage.getItem("tasks"));

            const {Todos} = allItems;
            return Todos
        } catch (e) {

        }
    }
    DeleteTask (id){
            const allItems = JSON.parse(localStorage.getItem("tasks"));

            const itemIdx = allItems.Todos.findIndex((el) => el.id === id);
            allItems.Todos.splice(itemIdx, 1);
            const obj = JSON.stringify(allItems);

            localStorage.setItem(`tasks`, obj)
    }
    checkTask (id){
        const allItems = JSON.parse(localStorage.getItem("tasks"));

        const itemIdx = allItems.Todos.findIndex((el) => el.id === id);
        allItems.Todos[itemIdx].checked = !allItems.Todos[itemIdx].checked;
        const obj = JSON.stringify(allItems);

        localStorage.setItem(`tasks`, obj)
    }
}