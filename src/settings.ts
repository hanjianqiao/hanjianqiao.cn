export const profile = {
	fullName: '韩建桥',
	title: '',
	institute: '',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: '编译原理',
			description: '编程语言是人与计算机交互的 “桥梁”，而编译原理（如词法分析、语法分析、代码优化）则实现了程序从高级语言到机器指令的转换，是开发编译器、解释器的核心技术。',
			field: 'computer-science'
		},
		{
			title: '操作系统',
			description: '作为硬件与软件的 “中间人”，管理进程、内存、文件系统等资源（如进程调度算法、虚拟内存技术），提供程序运行的基础环境。',
			field: 'computer-science'
		},
		{
			title: '数据结构与算法',
			description: '研究数据的组织与存储方式（如数组、链表、树、图），决定了数据操作的效率（如查找、插入、删除）。基于数据结构设计高效解决方案（如排序算法、最短路径算法），是计算机解决具体问题的 “方法论”，直接影响程序性能（如 O (n) 与 O (n²) 算法的效率差异）。',
			field: 'computer-science'
		},
		{
			title: '软件工程',
			description: '采用工程化方法设计、开发和维护软件（如需求分析、设计模式、敏捷开发），解决 “如何高效开发可靠软件” 的问题。从全局视角理解计算机系统的层级架构（如硬件层→操作系统层→应用层），以及各组件的协同工作（如网络协议栈、分布式系统中的节点通信）。',
			field: 'computer-science'
		},
		{
			title: '前后端开发',
			description: '前后端分离不仅是开发模式的优化，更是应对互联网应用复杂度爆炸的必然选择。它通过分工专业化、系统模块化、技术独立化，解决了传统开发中效率低下、维护困难、扩展受限的核心痛点，成为支撑高并发、高可用、多端协同的现代 Web 系统的 “基础设施”。无论是创业公司的快速迭代，还是大型企业的技术中台建设，该模式均已成为技术选型的标配。',
			field: 'computer-science'
		},
		{
			title: '图形学',
			description: '图形学早已超越 “让计算机画图” 的初级阶段，成为连接虚拟与现实、数据与认知、艺术与科学的通用技术底座。它不仅是娱乐产业的 “视觉引擎”，更是科学发现的 “第三只眼”、工业升级的 “数字扳手”、人机交互的 “未来界面”。随着元宇宙、AI 生成内容（AIGC）等领域的爆发，图形学将继续扮演 “技术基建” 角色，推动人类以更直观、沉浸的方式探索数字世界与物理世界的融合可能。',
			field: 'computer-science'
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'hanjianqiao@gmail.com',
	linkedin: '',
	x: '',
	github: 'https://github.com/hanjianqiao',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'http://hanjianqiao.cn', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: '韩建桥的简介',
	default_description: '韩建桥的简介',
	default_image: '/images/astro-academia.png',
}
