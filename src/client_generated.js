const grpc = require('@grpc/grpc-js');
// Импорт сгенерированных gRPC сервисов и сообщений
const { GetUserRequest } = require('./generated/getuser_pb');

const { UserServiceClient } = require('./generated/getuser_grpc_pb');

// Создание клиента
const client = new UserServiceClient('213.149.166.195:1666', grpc.credentials.createInsecure());

// Создание и настройка запроса
const request = new GetUserRequest();
request.setTelegramId(123456); // Устанавливаем telegram_id в запрос

// Вызов метода
client.getUser(request, (error, response) => {
    if (error) {
        console.error(`Ошибка при вызове метода: ${error.message}`);
        return;
    }
    console.log('Ответ от сервера:', response);
    console.log('Ответ от сервера:', response.toObject());
});
