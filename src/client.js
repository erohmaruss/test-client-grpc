const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Определение пути к .proto файлу
const PROTO_PATH = './getuser.proto';

// Загрузка определения .proto файла
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userService = protoDescriptor.protobuff.UserService;

// Создание клиента
const client = new userService('localhost:50051', grpc.credentials.createInsecure());

// Вызов метода
const request = {
    telegram_id: 123456 // Замените на ваше значение
};

client.GetUser(request, (error, response) => {
    if (error) {
        console.error(`Ошибка при вызове метода: ${error.message}`);
        return;
    }
    console.log('Ответ от сервера:', response);
});
