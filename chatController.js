const Room = require('./models/Room');
const Chat = require('./models/Chat');

// 채팅방 접속
exports.getRoom = async (req, res) => {
  try {
    // Room에 있는 채팅 내역 뽑아줘야 함 --------------
    res.render('index.html');
    res.json({});
  } catch (error) {
    console.log(error);
  }
};
// 채팅방 생성
exports.postRoom = async (req, res) => {
  try {
    const newRoom = await Room.create({
      // roomName에 상대방 이름이 들어와야 함 --------------
      roomName: 'TestRoom',
    });
  } catch (error) {
    console.log(error);
  }
};
// 채팅방 삭제
exports.deleteRoom = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Room.findOneAndRemove({ id: _id });
  } catch (error) {
    console.log(error);
  }
};
// 채팅 데이터 저장
exports.saveChat = async (userId, message) => {
  try {
    const newChat = await Chat.create({
      userId: userId,
      message: message,
    });
  } catch (error) {
    console.log(error);
  }
};
