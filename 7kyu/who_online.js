/*У вас есть приложение для группового чата, но кто сейчас онлайн!?
Вы хотите показать своим пользователям, кто из их друзей находится в сети и доступен для общения!
Для входных данных массива объектов, содержащих имена пользователей, статус и время с момента
последней активности (в минутах), создайте функцию для определения, кто является online, offlineи away.
Если кто-то есть, onlineно его lastActivityне было более 10 минут назад, его следует рассмотреть away.
Входные данные имеют следующую структуру:*/

const whosOnline = (friends) => {
    const result = {
        online: [],
        offline: [],
        away: []
    };

    // Проверка на пустой массив
    if (friends.length === 0) {
        return {};
    }

    friends.forEach(friend => {
        if (friend.status === 'online') {
            // Проверка на онлайн
            if (friend.lastActivity <= 10) {
                result.online.push(friend.username); //онлайн
            } else {
                result.away.push(friend.username); //не доступен
            }
        } else if (friend.status === 'offline') {
            result.offline.push(friend.username); //оффлайн
        }
    });

    // Если нет онлайн, убираем ключ online
    if (result.online.length === 0) {
        delete result.online;
    }

    return result; // Возвращаем резалт
}