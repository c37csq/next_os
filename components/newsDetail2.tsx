import styles from '../styles/newsDetail2.module.css';
import commonStyles from '../styles/Common.module.css';
import { NewsDetailProps } from '../types';
import Link from 'next/link';

const NewsDetail2 = (props: NewsDetailProps) => {
  const { id, url } = props;

  return (
    <div style={{ display: id === '2' ? 'block' : 'none' }} className={styles.newsDetail2}>
      <div className={commonStyles.imgWrapper}>
        <img style={{ width: '100%' }} src="/images/news_img.png" alt="新闻详情" />
      </div>
      <div className={styles.news2_detail}>
        <div className={styles.news2_content}>
          <p className={`${styles.bread} ${commonStyles.bread}`}>
            <Link href="/">
              <a className={commonStyles.bread_a}>首页 </a>
            </Link>
            &gt;&nbsp;
            <Link href={url}>
              <a className={commonStyles.bread_a}>新闻中心 </a>
            </Link>
            &gt; 新闻详情
          </p>
          <div className={styles.news2_detail_content}>
            <div className={styles.news2_detail_title}>2021年上半年家居市场六大现象盘点</div>
            <div className={`${styles.text_indent} ${styles.text_style}`}>
              走过了2020疫情造成的营商环境困难，2021年上半年家居市场的格局悄悄发生变化。在这半年里，传统家居经营模式日渐凸显颓势，大家居、全屋定制、整装、智能家居、互联网新零售异常火热，行业发展迅速，经营者的思维方式也逐步有了新的转变。
            </div>
            <div className={`${styles.news2_content2} ${styles.text_style}`}>
              与去年相比，全国建材家居景气指数(BHI)持续攀升，消费需求旺盛。但数据背后仍有许多现象值得我们总结和反思。传统的中小型建材家居卖场面临的生存危机仍将加大；家装市场竞争愈演愈烈；建材零售生存空间被一再挤压；地产、家电抢占行业份额……2021年上半年行业总体可以用以下六个现象进行概括。这些变化也时刻提醒家居人必须转变新思维，把握机遇发力新赛道，否则就会被时代边缘化。
            </div>
            <p className={`${styles.text_indent} ${styles.text_style}`}>&gt;&gt;现象1</p>
            <p className={`${styles.text_indent} ${styles.text_style}`}>地产、电商向家装不断渗透</p>
            <div className={`${styles.text_indent} ${styles.text_style}`}>
              地产进军家装市场早已不是新鲜事情。去年开始，万科、恒大、碧桂园等地产商纷纷将目光投向了家装行业。家装作为地产的下游企业，开发商渗透到这个行业中似乎是顺理成章的事情。日前，贝壳找房宣布与圣都家装达成协议，将收购圣都100%的股权。圣都作为华东区域知名装企，此次与贝壳合作一定程度将家装与房地产企业的关联度再次拉近。除了房地产不断渗透，国美、苏宁、海尔也在上半年强势入局家装行业，看中了家装领域3.54万亿的市场规模。
              点评：“跨界”为企业提供了更多的可能，也让整个家居圈更具活力。未来企业不再只扮演一种角色，不同领域的企业通过跨界合作，强强联合形成“战队”，也会让这个行业更加品牌化和规范化。
            </div>
            <p className={`${styles.text_indent} ${styles.text_style}`}>&gt;&gt;现象2</p>
            <p className={`${styles.text_indent} ${styles.text_style}`}>家装迭代升级 定制向整装发力</p>
            <div className={`${styles.text_indent} ${styles.text_style}`}>
              ß从今年上半年西安家装市场的营销模式来看，套餐已经退市了，整装风头正盛。上半年新开业的几家装修公司都是主打整装。根据有关数据显示，消费者的选择从单一装修到整装占到了近80%。不仅装修公司朝整装转型，定制企业也发力整装。
            </div>
            <div className={styles.text_style}>
              先有2020年，索菲亚全年完成500家整装企业签约计划，实现销售额7417.31万元。2021年，定制家居头部企业纷纷展开新一轮攻势抢占整装赛道。尚品宅配在2021年开年即宣布公司将全面转型为整装企业，致力打造“看着BIM(一般指建筑信息模型）做装修”的一站式家装解决平台。今年4月，欧派家居与圣都家装启动“一心一亿”战略，共同推动整装发展。整装已成为定制家居企业下一步发力重点，同时多品牌、全品类也是定制企业的发力方向。
            </div>
            <div className={styles.text_style}>
              点评：家装行业一路从半包、套餐、全包、整装，不断迭代升级，一步步向省心、高效、省钱、便捷上靠拢。而定制家居进入整装也是行业趋势，毕竟当下家庭装修中或多或少会涉及定制，定制进入装修行业能更好地了解消费痛点，贴合消费需求。
            </div>
            <p className={`${styles.text_indent} ${styles.text_style}`}>&gt;&gt;现象3</p>
            <p className={`${styles.text_indent} ${styles.text_style}`}>成品家具全面向定制转型</p>
            <div className={styles.text_style}>
              这两年成品家居品牌，如曲美、皇朝、联邦高登、红苹果、全友、左右家私等软体家居品牌，纷纷跨界做定制，定制俨然成了香饽饽。
            </div>
            <div className={styles.text_style}>
              今年上半年先有司米橱柜宣布进入定制市场，随后芝华仕重磅宣布并购成都高定品牌那库……截至现在，国内诸多成品、卫浴、陶瓷、板材等品牌也紧随厨柜、衣柜品牌商的脚步入局。就上半年召开的上海、广东家居展来看，定制已占所有家居品牌的85%以上，几乎所有的软体、实木、儿童家具均有定制模块。
            </div>
            <div className={styles.text_style}>
              点评：随着市场发展和消费者升级，全屋定制早已是建材家居行业主要爆发的市场和行业入口。数据显示，定制家居每年正以30%的速度递增
            </div>
            <p className={`${styles.text_indent} ${styles.text_style}`}>&gt;&gt;现象4</p>
            <p className={`${styles.text_indent} ${styles.text_style}`}>建材零售生存空间愈发艰难</p>
            <div className={styles.text_style}>
              精装房以及装修公司的整装行为对建材行业造成了很大的压力。从今年上半年西安主流家居卖场五一期间的销售情况来看，建材的销售并没有起色，尤其是瓷砖和木地板，甚至这几年一路下滑。部分木地板企业甚至在收缩店面面积，加入全屋定制模式。从家居卖场的楼层布局来看，原本占据较大比重且处于最佳位置的建材已经开始给全屋定制移地方。
            </div>
            <div className={styles.text_style}>
              点评：目前建材领域洗牌明显，大自然、圣象、东鹏等国内外一线企业已经开启了以大家居为主题的扩张之路，中小企业的生存空间越来越小。目前建材领域已经形成了强者越强，弱者正在退市的状态，这种状态还会持续加剧。
            </div>
            <p className={`${styles.text_indent} ${styles.text_style}`}>&gt;&gt;现象5</p>
            <p className={`${styles.text_indent} ${styles.text_style}`}>环保已上升至企业存亡的关键</p>
            <div className={styles.text_style}>
              今年2月曲美在北京召开2021年度首场发布会，号召家居企业担当社会责任，向市场提供更环保低碳、更经久耐用的产品，多次强调环保是家居企业生存的关键；6月维意定制推出全新“维意净味抗菌”技术，称该技术是板材家具的一次重要更新，让家具拥有“自动长效灭菌抑菌”的能力；随后顶固重磅发布了第三代·净纯竹香板升级战略；近日全友也推出了绿色生态板……从去年开始，欧派、索菲亚、好莱客等先后推出无醛板材，环保已经上升到了关乎企业存亡的高度。
            </div>
            <div className={styles.text_style}>
              点评：家居企业要想持久发展，环保是重中之重，家居头部企业已经意识到这一点。如果头部企业在环保上起到了引领作用，相信消费者将是最大受益者，也对行业有更加正向的引导。
            </div>
            <p className={`${styles.text_indent} ${styles.text_style}`}>&gt;&gt;现象6</p>
            <p className={`${styles.text_indent} ${styles.text_style}`}>智能化家居已经渗透到生活中</p>
            <div className={styles.text_style}>
              智能家居已经被提及几年了，疫后智能化家居才真正被叫响。走访西安各大家居卖场，智能家居从原来的零店面，已发展至如今的一个卖场至少5家智能家居品牌。根据中商产业研究院预测，2021年我国智能家居市场规模可达5800.5亿元。目前，智能照明、智能家电、智能安保等系统已经渗透到我们的生活中了。不仅如此，今年6月尚品宅配与创米科技在签订了战略合作。之后其他定制品牌纷纷向智能家居抛出“橄榄枝”，定制与智能家居的合作推动整装全程数字化、智能化,让用户得到更全面、更省心的一站式服务,让全屋整装如虎添翼。
            </div>
            <div className={styles.text_style}>
              点评：随着5G技术的普及，智能家居必然成为2021乃至日后家居行业新的竞争热点，智能家居的发展必将对家居家装市场的现有格局形成冲击，所以加大科技投入与研发力度也越来越成为家居企业增强市场竞争力的关键所在。
              华商报记者 千朋茹
            </div>
            <p className={styles.text_style}>本文来源：华商网</p>
            <div className={styles.img_show}>
              <div className={styles.img1}>
                <img src="/images/newsDetail2-1.webp" alt="新闻图片" />
              </div>
              <div className={styles.img2}>
                <img src="/images/newsDetail2-2.jpg" alt="新闻图片" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail2;
