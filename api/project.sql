/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2019-03-27 19:23:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `phone` varchar(255) NOT NULL,
  `spid` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img1` varchar(255) NOT NULL,
  `price` float(255,2) NOT NULL,
  `price2` float(255,2) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `text` varchar(12000) NOT NULL,
  `text2` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../image/2018121217581856!200x200.jpg', '322.00', '389.00', '../image/ico_otc_r.gif', '领券+好礼】汇仁肾宝片126s 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。', '加入购物车');
INSERT INTO `list` VALUES ('2', '../image/20181010101535717!200x200.jpg', '60.50', '75.00', '../image/ico_rx.gif', '左卡尼汀口服溶液(东维力)(国产) 用于防治左卡尼汀缺乏。如慢性肾衰病人因血液透析所致的左卡尼汀缺乏。', '查看详情');
INSERT INTO `list` VALUES ('3', '../image/20181012134240151!200x200.jpg', '16.00', '22.00', '../image/ico_rx.gif', '送腰痛贴】同仁堂 六味地黄丸(浓缩丸) 120s 滋阴补肾。用于肾阴亏损，头晕耳鸣，腰膝酸软，骨蒸潮热，盗汗遗精。', '加入购物车');
INSERT INTO `list` VALUES ('4', '../image/nopic.gif', '498.00', '0.00', '../image/ico_otc_r.gif', '周公百岁酒 本品补血生精，调气壮神。用于气血两亏，真阴不足，四肢酸软。', '加入购物车');
INSERT INTO `list` VALUES ('5', '../image/2018127155438398!200x200.jpg', '429.00', '690.00', '../image/ico_rx.gif', '金戈  50mg*20片  枸橼酸西地那非片 适用于治疗勃起功能障碍。', '查看详情');
INSERT INTO `list` VALUES ('6', '../image/2018101213472468!200x200.jpg', '11.90', '23.00', '../image/ico_rx.gif', '金匮肾气丸(同仁堂)(水蜜丸) 温补肾阳，化气行水。用于肾虚水肿，腰膝酸软，小便不利，畏寒肢冷。', '查看详情');
INSERT INTO `list` VALUES ('7', '../image/2018101010121572!200x200.jpg', '47.50', '98.00', '../image/ico_rx.gif', '疏肝益阳胶囊(益佰) 疏肝解郁活血补肾。用于肝郁肾虚和肝郁肾虚兼血瘀证所致功能性阳痿和轻度动脉供血不足性阳痿，症见阳痿，阴茎痿软不举或举而不坚，胸闷善太息，胸胁胀满，腰膝酸软，舌淡或有瘀斑，脉弦或弦细。', '查看详情');
INSERT INTO `list` VALUES ('8', '../image/40df00b0c997403fb9ac16a0a22cf963!200x200.jpg', '258.00', '380.00', '../image/ico_rx.gif', '金戈  25mg*21片   枸橼酸西地那非片 适用于治疗勃起功能障碍。', '查看详情');
INSERT INTO `list` VALUES ('9', '../image/20181112165355992!200x200.jpg', '4.00', '22.00', '../image/ico_rx.gif', '领券+好礼】汇仁肾宝片126s 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。', '查看详情');
INSERT INTO `list` VALUES ('10', '../image/b1e8d82f780b4bb0b4586603b08d5d9b!200x200.jpg', '47.00', '80.00', '../image/ico_rx.gif', '金戈 25mg*3片  枸橼酸西地那非片 适用于治疗勃起功能障碍。', '查看详情');
INSERT INTO `list` VALUES ('11', '../image/2018109163313607!200x200.jpg', '16.00', '49.60', '../image/ico_rx.gif', '前列舒乐胶囊(银涛) 补肾益气，化瘀通淋。用于肾脾双虚，气滞血瘀，前列腺增生，慢性前列腺炎；面色晃白，神疲乏力，腰膝疲软无力，小腹坠胀，小便不爽，点滴不出，或尿频、尿急、尿道涩痛。', '查看详情');
INSERT INTO `list` VALUES ('12', '../image/20181128182637394!200x200.jpg', '38.00', '118.00', '../image/ico_rx.gif', '引阳索胶囊(育林) 补肾壮阳，生津。用于阳痿早泄，腰膝酸软，津污自汗，头目眩晕等症。', '查看详情');
INSERT INTO `list` VALUES ('13', '../image/20181022161010416!200x200.jpg', '27.00', '65.00', '../image/ico_rx.gif', '右归丸(同仁堂) 温补肾阳，填精止遗。用于肾阳不足，命门火衰，腰膝酸冷，精神不振，怯寒畏冷，阳痿遗精，大便溏薄，尿频而清。', '查看详情');
INSERT INTO `list` VALUES ('14', '../image/2018112818507113!200x200.jpg', '208.00', '278.00', '../image/ico_rx.gif', '盐酸达泊西汀片(必利劲) 必利劲适用于治疗符合下列所有条件的18至64岁男性早泄（PE）患者：1.阴茎在插入阴道之前、过程当中或者插入后不久，以及未获性满足之前仅仅由于极小的性刺激即发生持续的或反复的射精；2.因早泄（PE）而导致的显著性个人苦恼或人际交往障碍；3.射精控制能力不佳。', '查看详情');
INSERT INTO `list` VALUES ('15', '../image/2016318161722338!200x200.jpg', '8.00', '39.00', '../image/ico_rx.gif', '非那雄胺片(浦列安) 本品适用于治疗已有症状的良性前列腺增生症（BPH）： 1、改善症状。2、降低发生急性尿潴留的危险性。 3、降低需进行经尿道切除前列腺（TURP）和前列腺切除术的危险性。', '查看详情');

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('1', '17724284402', 'a123456');
INSERT INTO `reg` VALUES ('2', '13612138258', 'a123456');
INSERT INTO `reg` VALUES ('3', '15914678520', 'a123456');
INSERT INTO `reg` VALUES ('4', '17915935715', 'a123456');
INSERT INTO `reg` VALUES ('5', '18916953465', 'a123456');
INSERT INTO `reg` VALUES ('6', '13612138465', 'a123456');
INSERT INTO `reg` VALUES ('7', '15917985236', 'a123456');
INSERT INTO `reg` VALUES ('8', '15917985246', 'a123456');
INSERT INTO `reg` VALUES ('9', '15919854632', 'a123456');
INSERT INTO `reg` VALUES ('10', '13670397479', 'a123456');

-- ----------------------------
-- Table structure for spsjxr
-- ----------------------------
DROP TABLE IF EXISTS `spsjxr`;
CREATE TABLE `spsjxr` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img14` varchar(255) NOT NULL,
  `img15` varchar(255) NOT NULL,
  `dt` varchar(255) NOT NULL,
  `img1` varchar(255) NOT NULL,
  `li1` varchar(255) NOT NULL,
  `li2` varchar(255) NOT NULL,
  `li3` varchar(255) NOT NULL,
  `li4` varchar(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `img3` varchar(255) NOT NULL,
  `img4` varchar(255) NOT NULL,
  `img5` varchar(255) NOT NULL,
  `img13` varchar(255) NOT NULL,
  `h3` varchar(255) NOT NULL,
  `p` varchar(255) NOT NULL,
  `text1` varchar(255) NOT NULL,
  `img6` varchar(255) NOT NULL,
  `text2` varchar(255) NOT NULL,
  `img7` varchar(255) NOT NULL,
  `text3` varchar(255) NOT NULL,
  `img8` varchar(255) NOT NULL,
  `text4` varchar(255) NOT NULL,
  `img9` varchar(255) NOT NULL,
  `text5` varchar(255) NOT NULL,
  `img10` varchar(255) NOT NULL,
  `text6` varchar(255) NOT NULL,
  `img11` varchar(255) NOT NULL,
  `text7` varchar(255) NOT NULL,
  `img12` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of spsjxr
-- ----------------------------
INSERT INTO `spsjxr` VALUES ('1', '', '', '1F 家庭常备', 'image/20180122110928_881.png', '呼吸专题', '胃病用药', '雷诺考特', '杜密克', 'image/20161120153534_093.jpg', 'image/20161120153535_334.jpg', 'image/20161120153537_420.jpg', 'image/20161120153539_237.jpg', 'image/20180321103924_555.png', '舒利迭', '摆脱哮喘 轻松生活', '小麦纤维素颗粒(非比麸)', 'image/201798174349389!300x300.jpg', '艾司奥美拉唑镁肠溶片(曾用名:埃索美拉唑镁肠溶片)', 'image/2017915175237482!300x300.jpg', '丹参酮胶囊(希力)', 'image/2017926115058375!300x300.jpg', '感冒灵颗粒(999)', 'image/20171024165138276!300x300.jpg', '吸入用布地奈德混悬液(普米克令舒)', 'image/201798175911584!300x300.jpg', '百令胶囊(百令)', 'image/20179518235682!300x300.jpg', '布地奈德福莫特罗粉吸入剂(信必可都保)', 'image/201794211020233!300x300.jpg');
INSERT INTO `spsjxr` VALUES ('2', '', '', '2F 专科用药', 'image/20180122111010_932.png', '糖尿病专题', '牛皮癣专题', '精神分裂', '畅配专题', 'image/20171113161532_317.jpg', 'image/20171113161537_367.jpg', 'image/20171113161541_959.jpg', 'image/20171113161545_729.jpg', 'image/20180321104023_179.png', '片仔癀', '用于热毒血瘀所致急慢性病毒性肝炎', '卡泊三醇软膏(达力士)', 'image/201791318251936!300x300.jpg', '非那雄胺片(保法止)', 'image/2017920185214897!300x300.jpg', '恩替卡韦分散片(润众)', 'image/2017926114742307!300x300.jpg', '拉莫三嗪片(利必通)', 'image/201792611508206!300x300.jpg', '排毒养颜胶囊(盘龙云海)', 'image/2017630143238523!300x300.jpg', '恩替卡韦分散片(雷易得)', 'image/20179219411621!300x300.jpg', '盐酸普拉克索片(森福罗)', 'image/201791117368636!300x300.jpg');
INSERT INTO `spsjxr` VALUES ('3', 'image/20190314142428_847.jpg', 'image/ad_tag.png', '3F 男性专区', 'image/20180122111022_247.png', '前列腺专题', '优生优育', '希爱力', '益肾壮阳膏', 'image/20171113162543_322.jpg', 'image/20171113162547_523.jpg', 'image/20171113162551_225.jpg', 'image/20171113162554_025.jpg', 'image/20180321104140_313.png', '希爱力', '治疗男性勃起功能障碍', '枸橼酸西地那非片(金戈)', 'image/20179622539255!300x300.jpg', '他达拉非片(希爱力)', 'image/201797175354977!300x300.jpg', '盐酸达泊西汀片(必利劲)', 'image/201711716155509!300x300.jpg', '赠维C】金水宝金水宝胶囊 72粒装', 'image/20181112114254691!300x300.jpg', '肾宝片(汇仁)', 'image/2017101617544160!300x300.jpg', '引阳索胶囊(育林)', 'image/20171011113310920!300x300.jpg', '龟龄集(远)', 'image/201791217131253!300x300.jpg');
INSERT INTO `spsjxr` VALUES ('4', 'image/20190131133327_777.jpg', 'image/ad_tag.png', '4F 老年专区', 'image/20180122111052_060.png', '安宫牛黄丸', '金纳多', '云南白药', '唯依能', 'image/20171113162749_867.jpg', 'image/20171113162755_162.jpg', 'image/20171113162757_320.jpg', 'image/20171113162800_512.jpg', 'image/20180419205317_138.jpg', '香丹清', '润肠通便 祛黄褐斑', '安宫牛黄丸(同仁堂)', 'image/2017719155718669!300x300.jpg', '托伐普坦片(苏麦卡)', 'image/201711385852859!300x300.jpg', '磷酸西格列汀片(捷诺维)', 'image/2017912171126960!300x300.jpg', '达格列净片(安达唐)', 'image/201791593739257!300x300.jpg', '双参龙胶囊(格拉丹东)', 'image/2017119154229721!300x300.jpg', '维D钙咀嚼片(迪巧)', 'image/20179518618396!300x300.jpg', '塞来昔布胶囊(西乐葆)', 'image/2017102618227488!300x300.jpg');
INSERT INTO `spsjxr` VALUES ('5', '', '', '5F 营养滋补', 'image/20180925171138_911.jpg', '羊胎盘', '碧生源常润茶', '余仁生', '中药饮片', 'image/20171228145204_238.jpg', 'image/20181106174307_083.jpg', 'image/20180925164921_644.jpg', 'image/20180925170536_369.jpg', 'image/20180925164411_940.jpg', '汤臣倍健蛋白粉', '抵抗力 守护你', '同仁堂牌破壁灵芝孢子粉胶囊', 'image/2018517173616430!300x300.jpg', 'NC澳洲护肝片', 'image/201872615039564!300x300.jpg', '中智草晶华天麻破壁草本', 'image/201641312154554!300x300.jpg', '健安喜浓缩加强鱼油软胶囊(120粒)', 'image/2018917163742113!300x300.jpg', 'Swisse 葡萄籽精华片', 'image/201881171743821!300x300.jpg', 'NC姜黄素胶囊(特强型)', 'image/2018726143150632!300x300.jpg', '健力多R氨糖软骨素钙片', 'image/201712418319200!300x300.jpg');
INSERT INTO `spsjxr` VALUES ('6', '', '', '6F 医疗器械', 'image/20180319091806_750.jpg', '血压计', '鼻腔护理喷雾', '治疗仪', '雾化器', 'image/20171113165211_204.jpg', 'image/20171113165214_893.jpg', 'image/20171113165219_280.jpg', 'image/20171113165222_827.jpg', 'image/20180321104350_095.png', '雅培血糖仪', '雅培瞬感扫描式葡萄糖监测系统', '稳豪型血糖试纸50片', 'image/20172289502257!300x300.jpg', '鱼跃403C压缩空气式雾化器', 'image/2017321143346638!300x300.jpg', '欧姆龙电子血压计HEM-8102A(上臂式)', 'image/20172817337121!300x300.jpg', '全日康J18B型电脑中频治疗仪（普通款）', 'image/20183216305995!300x300.jpg', '仙鹤-神灯(TDP特定电磁波治疗仪)(CQ-29P型)', 'image/201722495923683!300x300.jpg', '诺斯清生理性海水鼻腔护理喷雾器', 'image/2017224104118134!300x300.jpg', '欧姆龙电子血压计HEM-7207语音播报(上臂式)', 'image/20172716329449!300x300.jpg');
SET FOREIGN_KEY_CHECKS=1;
