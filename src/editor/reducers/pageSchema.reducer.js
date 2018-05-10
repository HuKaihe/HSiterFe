// import { getRandomString } from '../../service/service';

let schemaRecord = [
    {
        layoutSchema: [],
        componentSchema: [],
    },
];
let recordPointer = 0;

function setSchemaRecord(schema) {
    console.log('setSchemaRecord');
    // 最多存储10步操作
    if (schemaRecord.length > 10) {
        schemaRecord.splice(0, 1);
    }
    if (recordPointer !== schemaRecord.length - 1) {
        schemaRecord = schemaRecord.slice(0, recordPointer + 1);
    }
    schemaRecord.push({ ...schema });
    recordPointer = schemaRecord.length - 1;
    console.log('pointer:', recordPointer);
    console.log('schemaRecord:', schemaRecord);
}

// 添加新元素
function addNewComponent({ id = '', name = '', order = 0 }, state) {
    const { layoutSchema: oldLayoutSchema, componentSchema: oldComponentSchema } = state;
    const newLayoutSchema = [...oldLayoutSchema];
    const newComponentSchema = [...oldComponentSchema];
    const newComponent = {
        id,
        name,
    };
    const newComponentData = {
        id,
        data: {
        },
    };
    newLayoutSchema.splice(order, 0, newComponent);
    newComponentSchema.push(newComponentData);
    const newPageSchema = {
        layoutSchema: newLayoutSchema,
        componentSchema: newComponentSchema,
    };
    setSchemaRecord(newPageSchema);
    return newPageSchema;
}

// 向上移动元素
function moveComponentUp({ id = '', order = 0 }, state) {
    if (order === 0) {
        return null;
    }
    const { layoutSchema: oldLayoutSchema, componentSchema } = state;
    const component = oldLayoutSchema.find(item => item.id === id);
    const newLayoutSchema = [...oldLayoutSchema];
    newLayoutSchema.splice(order, 1);
    newLayoutSchema.splice(order - 1, 0, component);
    const newPageSchema = {
        layoutSchema: newLayoutSchema,
        componentSchema,
    };
    setSchemaRecord(newPageSchema);
    return newPageSchema;
}

// 向下移动元素
function moveComponentDown({ id = '', order = 0 }, state) {
    if (order === state.length - 1) {
        return null;
    }
    const { layoutSchema: oldLayoutSchema, componentSchema } = state;
    const component = oldLayoutSchema.find(item => item.id === id);
    const newLayoutSchema = [...oldLayoutSchema];
    newLayoutSchema.splice(order, 1);
    newLayoutSchema.splice(order + 1, 0, component);
    const newPageSchema = {
        layoutSchema: newLayoutSchema,
        componentSchema,
    };
    setSchemaRecord(newPageSchema);
    return newPageSchema;
}

// 删除元素
function deleteComponent({ order = 0 }, state) {
    const { layoutSchema: oldLayoutSchema, componentSchema } = state;
    const newLayoutSchema = [...oldLayoutSchema];
    newLayoutSchema.splice(order, 1);
    const newPageSchema = {
        layoutSchema: newLayoutSchema,
        componentSchema,
    };
    setSchemaRecord(newPageSchema);
    return newPageSchema;
}

// 修改元素配置
function editComponent({ id }, state) {
    const { componentSchema: oldComponentSchema, layoutSchema } = state;
    const newComponentSchema = oldComponentSchema.filter(item => item.id !== id);
    newComponentSchema.push({
        id,
        data: {
            moduleTitle: '文学艺术专栏集合',
            cards: [
                {
                    title: 'Hey 尤克里里',
                    url: 'http://www.baidu.com',
                    pictureUrl: './images/ukll.gif',
                },
                {
                    title: '原创文集',
                    url: 'http://www.baidu.com',
                    pictureUrl: './images/HotCollection.jpg',
                },
            ],
        },
    });
    const newPageSchema = {
        layoutSchema,
        componentSchema: newComponentSchema,
    };
    setSchemaRecord(newPageSchema);
    return newPageSchema;
}

// 撤销最新的操作
function undo() {
    console.log('undo');
    if (recordPointer < 1) {
        console.log('can not undo');
        console.log('pointer:', recordPointer);
        console.log('schemaRecord:', schemaRecord);
        return null;
    }
    recordPointer -= 1;
    console.log('pointer:', recordPointer);
    console.log('schemaRecord:', schemaRecord);
    return schemaRecord[recordPointer];
}

function forward() {
    console.log('forward');
    if (recordPointer >= schemaRecord.length - 1) {
        console.log('can not forward');
        console.log('pointer:', recordPointer);
        console.log('schemaRecord:', schemaRecord);
        return null;
    }
    recordPointer += 1;
    return schemaRecord[recordPointer];
}

export default function pageSchema(state = {}, action) {
    const { type } = action;
    const map = {
        addNewComponent,
        moveComponentUp,
        moveComponentDown,
        deleteComponent,
        editComponent,
        undo,
        forward,
    };
    const operate = map[type] || (() => { });
    return operate(action, state) || state;
}
