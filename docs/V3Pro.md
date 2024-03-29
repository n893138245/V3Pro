# 全彩显示屏控制管理平台V3Pro用户手册

## 软件说明

适用于V3Pro显示屏配置软件

V2.0

## 修订记录

|版本号|日期|说明|
|-----------|-----------|-----------|
|V1.0|2019.09|正式发布|
|V1.1|2019.10|更新说明书内容|
|V1.2|2020.06|更新说明书格式。增加调试模式说明，邮件告警说明，外该配置说明，鱼域说明，电源控制说明，照件维护说明，网络配置说明。“更新软件安装内容并移至附录|
|V1.3|2020.12|更新为中性说明书|
|V1.4|2021.01|更新功熊漬单。增加设备维护说明，日志查看说明。更新用户模式说明，外设配置说明，画面控制说明，电源控制说明，状态监控说明|
|V1.4.1|2021.01|更新附录页码|
|V1.4.2|2021.02|更新安装部分说明|
|V1.5|2021.03|更新至 V3Pro2.1.0|
|V1.6|2021.07|更新至 V3Pr02.3.0|
|V1.7|2022.03|更新至 V3Pro2.5.1|
|V1.8|2022.08|更新至 V3Pro2.6.0|
|V1.9|2022.11|更新至 V3Pro2.6.3|
|V2.0|2023.11|更新至 V3Pro2.7.1|

## 1 系统概述

- V3Pro是显示屏配置软件，运行于Windows\Linux等系统。在显示屏系统应用场景中，配合发送盒、扫描板和接收盒，V3Pro可实现对LED显示屏的布局配置、亮度色彩控制、电源控制、显示屏运行状态监控等。用户在计算机前就能轻松控制显示屏的所有关键信息，保证显示屏的正常运行。
- V3显示屏系统的典型连接方式如图 1所示：

![](../image/V3Pro/image-000.png)

## 2 登录和用户模式

软件启动后出现登录界面如图 2所示，输入用户名及密码进入不同模式。

- 简易模式
  - 用户名：Primary，初始密码：sansi@v3pro
- 复杂模式
  - 用户名：Advanced，初始密码：sansi@v3pro
- 调试模式
  - 用户名：Professional，初始密码：sansi@v3pro

![](../image/V3Pro/image-001.png)

以上用户名及密码均为初始值，用户初次登录后自行修改密码，如图 3所示。

![](../image/V3Pro/image-002.png)

长时间不更新用户密码可能会出现用户密码泄漏影响显示屏系统控制功能的异常带来的风险，请定期更新用户密码，确保使用安全。

![](../image/V3Pro/image-003.png)

![](../image/V3Pro/image-004.png)

如需切换模式，单击右上角菜单按钮“![](../image/V3Pro/image-005.png)”，点击“退出登录”即可，如图 4所示。

![](../image/V3Pro/image-006.png)

### 2.1 简易模式

简易模式下，可以查看以下信息：

- 大屏当前的运行状态
- 运行时间
- 传感器的值（需配置相关的外部设备传感器）
- 显示屏亮度控制模式和亮度值
- 大屏电源控制模式和电源控制状态（需配置相关的电源控制设备）
- 更多监控信息

简易模式的控制功能：

- 显示屏亮度控制
- 显示屏电源控制

![](../image/V3Pro/image-007.png)

### 2.2 复杂模式

在复杂模式下，可以进行亮度色彩控制、画面控制、外设配置和布局配置，其余功能与简易模式相同。如图 6所示，在左侧工具栏中选择对应条目进入设置界面。

![](../image/V3Pro/image-008.png)

### 2.3 调试模式

在调试模式下，可以进行固件维护，其余功能与复杂模式相同。

![](../image/V3Pro/image-009.png)

## 3 功能总览

表 1 功能总览表

| 功能 | 子功能 | 说明 |
|----------|:--------:|----------|
| 用户分类 | 简易模式 | 简易模式，只有亮度控制，电源控制和监控信息权限。|
| 用户分类 | 复杂模式 | 复杂模式，支持除固件升级外所有功能权限。|
| 用户分类 | 调试模式 | 调试模式，包含复杂模式所有功能外，增加固件升级权限。|
|系统配置|服务网络配置|客户端配置服务器地址和端口，实现通过API接口采用http/https方式进行数据访问请求。|
|系统配置|V3网络配置|通信数据从实际物理连接V3系统设备的网卡收发。|
|项目配置|整屏配置导入|方便用户在重装计算机或软件时一键还原，正常点亮显示屏，无须重新布局配置等。|
|项目配置|整屏配置导出|一键备份当前软件系统所有配置，包括系统配置、布局配置、各功能设置参数等。|
|布局配置|布局的打开和保存|布局创建后可单独保存，同样的布局在其它项目可以直接加载使用。|
|布局配置|整屏分辨率、信号源分辨率和偏移|发送盒控制偏移和大小，发送盒网口（光口）控制大小和输出画面截取。|
|布局配置|自定义箱体|显示屏项目中标配的机箱存在不同大小的机箱，自定义添加设置机箱的宽和高。|
|亮度控制|电流增益|设置和选择电流增益方案。|
|亮度控制|手动调光|手动设置显示屏亮度。|
|亮度控制|自动调光-时间表调光|根据用户的使用习惯或无亮度传感器时，可以设置不同的时间段为黑屏、亮度值或传感器调光进行显示屏亮度调节。|
|亮度控制|自动调光-传感器调光|根据采集传感器返回值，查找调光对照表该返回值对应的显示屏亮度值，调节显示亮度。|
|亮度控制|自动调光-调光表配置|在传感器调试模式下，传感器返回值范围为1-255，而显示屏亮度范围1-100，通过调光表配置显示屏1-100亮度值对应的传感器返回值区间。|
|亮度控制|自动调光-硬件调光|在显示屏系统软件离线时解决自动调光问题，发送盒外接亮度传感器，且软件安装调试过程中已经将调光方式设置为发送盒调光。部分发送盒支持此功能，以实际发送盒使用情况为准。|
|色彩控制|色温调节-手动调节|手动调节实现色温1700K-10000K。|
|色彩控制|色温调节-时间表调节|不同时间段可设置不同的色温值。|
|色彩控制|色温调节-色温表配置|实现对某个色温值对应的白平衡RGB参数配置。|
|色彩控制|伽马调节-手动调节|手动调节实现1.0-4.0的伽马设置。|
|色彩控制|伽马调节-时间表调节|不同时间段可设置不同的伽马值。|
|色彩控制|色域调节-出厂默认|还原默认数值。|
|色彩控制|色域调节-NTSC|标准色域NTSC。|
|色彩控制|色域调节-PAL|标准色域PAL。|
|色彩控制|色域调节-REC.709|标准色域Rec.709，满足苹果需求。|
|色彩控制|色域调节-自定义|用户根据测光所得自定义目标色域输出范围值。|
|色彩控制|高画质-灰度精细调节|暂不可使用。|
|色彩控制|高画质-灰度等级拓展|提高灰度等级，低灰画面显示效果更佳。|
|画面控制|画面设置|正常为解除黑屏、解除锁定后的正常输出画面。黑屏实现输出为无画面。锁屏为锁定最后显示画面。|
|画面控制|信号源选择|信号源输入切换，一般应用于信号源备份情况下，即主输入信号源出现异常情况下，可以切换到备份输入信号源。|
|画面控制|3D功能|2D/3D的切换。3D眼镜的相位设置。|
|画面控制|HDR设置|发送盒HDR的开关功能。|
|画面控制|显示屏待机|待机模式下，按设置显示基色、显示灰度和亮度显示。|
|画面控制|无信号时显示画面设置|通知扫描板当无信号源输入时的输出显示画面；支持黑屏、最后帧、待机画面和预置画面。|
|画面控制|输出缩放控制|当输入信号与显示屏分辨率大小不一致时，不借助第三方视频设备情况下，由发送盒实现对输出画面的缩放，进而匹配实际显示屏分辨率大小。|
|画面控制|信号源扩展模式|信号源模式支持单显、双链、左右拓展、上下拓展共4种模式。|
|画面控制|PFPC使能|开启/关闭PFPC，变换速度可调，PFPC参数可调、RGB电流百分比可调。|
|画面控制|预置画面|选择图片固化到显示屏，无信号输入时可设置显示。|
|电源控制|手动通道控制|实现单通道分区给显示屏供电。|
|电源控制|时间表控制|配置时间表项，实现自动控制显示屏供电。|
|外部设备管理和控制|设备搜索。设备的增、删、改。设备关联到显示屏。|正确匹配显示屏相关传感器设备，供传感器状态数据采集和显示，并按策略告警和控制。添加并关联接收盒供显示屏详细状态查看接收盒网口状态，避免因此问题引起的显示异常。|
|状态监控|发送盒、接收盒状态|监控发送盒、接收盒的运行状态、通信状态和网口状态，对这些状态可能引起的异常给出提示。|
|状态监控|扫描板状态|监控扫描板的运行状态、通信状态和网口状态，对这些状态可能引起的异常给出提示。|
|状态监控|面板状态|监控面板的运行状态，对状态可能引起的异常给出提示。|
|状态监控|传感器状态|直接展示当前显示屏下关联的各亮度传感器采集得到的环境光数值。直接展示当前显示屏下关联的各烟雾传感器采集得到的烟雾告警状态。直接展示当前显示屏下关联的各温度传感器采集得到的温度值。监视显示屏各电源通道开启关闭状态。|
|固件维护|固件版本查询|不同固件版本以不同颜色显示加以区分，避免因为固件版本不一致引起的不同特性致显示屏显示异常问题。|
|固件维护|固件下载|从选择设备下载可用固件到本地计算机。|
|固件维护|固件升级|选择可用固件升级到设备。|
|固件维护|箱体配置|箱体硬件参数配置，如灰度、DCLK周期、DCLK低电平、显示模式和芯片类型等，并生成cmf文件存储在设备中。|
|设备调试|设备搜索|联网情况下搜索当前系统V3设备在线情况。|
|设备调试|设备定位|一般在调试情况下无法肉眼判断对应IP地址的扫描板在显示屏上的物理位置时，通过设备定位开启显示画面确定其所在位置。|
|设备调试|远程调试|通过命令行输入对应命令，获取设备相关状态信息。|
|设备调试|IP/MAC设置|对设备IP和MAC地址进行设定。|
|设备调试|寄存器读写|一般在调试情况下通过相关寄存器读写，排查显示异常问题是否对应寄存器参数错误引起。|
|日志功能|通信质量日志|获取硬件设备之间的通信质量日志，在线情况下，可通过配置将日志文件上传到日志平台，供可视化数据分析。|
|日志功能|本地展示和导出|便于显示屏控制软件V3Pro上直接查看日志，可按条件检索和排序。|
|策略告警及配置|温度异常控制|当温度传感器返回值超出设定范围时，即可能出现使用安全情况下，策略控制显示屏的亮度、黑屏或关闭电源操作。|
|策略告警及配置|烟雾告警控制|当烟雾报警触发时，即判定为可能发生火灾等使用安全问题时，策略控制显示屏的亮度、黑屏或关闭电源操作。|
|策略告警及配置|过温保护控制|当采集到屏体温度超过设定阈值时，动态调节显示亮度百分比，温度下降时恢复正常设置亮度，显示屏正常工作起到一个保护作用。|
|策略告警及配置|电压异常控制|提醒用户显示屏某些机箱开关电源电压异常，可能出现显示问题。|
|设备诊断|一键诊断|选择大屏进行设备一键诊断，输出设备状态诊断结果。|
|服务配置|定时器配置|针对服务定时进行的控制功能和查询功能进行开启关闭和间隔时间的配置。|
|亮度校正|启动亮度校正软件|启动已安装的V3BCorrect软件进行亮度校正。|
|箱体配置|启动箱体配置软件|启动已安装的ChipConfig软件进行箱体配置。|

## 4 功能介绍

### 4.1 网络配置

V3Pro由客户端和服务端组成，客户端与服务端正常通信需要进行如下配置。

- 通讯地址IP：V3Pro服务端运行的计算机IP地址。
- websocket端口：启用websocket后，服务端会主动推送显示屏信息到客户端。
- Oauth2.0：如需启用Oauth2.0访问服务端，勾选Oauth2.0，并在文本框中输入“token”。

![](../image/V3Pro/image-010.png)

简易模式下，此功能无法重新设置。

![](../image/V3Pro/image-011.png)

### 4.2 整屏配置导入

复杂模式或调试模式下，直接导入V3Pro配置的所有信息，包括布局配置、外部设备配置、控制方式和参数等。

1. 单击右上角菜单栏“ ![](../image/V3Pro/image-012.png)”，选择![](../image/V3Pro/image-013.png) 。

![](../image/V3Pro/image-014.png)

![](../image/V3Pro/image-015.png)

2. 单击![](../image/V3Pro/image-016.png)，一键导入整屏配置。
3. 选择导入文件。

![](../image/V3Pro/image-017.png)

### 4.3 整屏配置导出

复杂模式或调试模式下，直接导出V3Pro配置的所有信息，包括布局配置、外部设备配置、控制方式和参数等。

1. 单击右上角菜单栏“![](../image/V3Pro/image-018.png) ”，选择![](../image/V3Pro/image-019.png) 。
2. 单击![](../image/V3Pro/image-020.png) ，一键导出整屏配置。
3. 填写合同号，单击保存路径。

![](../image/V3Pro/image-021.png)

4. 选择所需保存路径。

![](../image/V3Pro/image-022.png)

### 4.4 外设配置

复杂模式或调试模式下，单击左侧工具栏菜单项 ![](../image/V3Pro/image-023.png)，进入外设配置界面如图 14所示：

![](../image/V3Pro/image-024.png)

外设配置部分包括系统总外设的添加、删除、属性配置功能和外设与大屏关联关系的添加与移除。

####  4.4.1 管理外设

接收盒下的所有子设备即为外部设备，包括PLC（电源通道可自定义命名）、烟雾传感器、亮度传感器等。

点击![](../image/V3Pro/image-025.png)按钮进入图 15，该界面可以添加、删除总外设。只关联外设不关联接收盒时，状态监控界面显示外设运行状态，但不会显示接收盒运行状态。

![](../image/V3Pro/image-026.png)

- 添加外设
点击“搜索”按钮，弹出搜索外设列表的界面，如图 16所示，勾选并点击“确认添加”可将外设添加到“总外设”列表下。

![](../image/V3Pro/image-027.png)

如需手动添加外设，先选中总外设下的任一外设，然后点击 ![](../image/V3Pro/image-028.png)，弹出如图 17所示界面，在此界面可选择外设并添加到总外设列表下。

![](../image/V3Pro/image-029.png)

-	删除外设

选中要被删除的外设，点击 ![](../image/V3Pro/image-030.png)即可。

-	配置外设属性

选择总外设下需修改配置属性的外设，在界面右侧出现属性配置界面。根据提示修改外设的名称、IP等属性，修改可选传感器下各种设备的数量可以增加或删除该外设下的子设备，如图 18所示。

![](../image/V3Pro/image-032.png)

#### 4.4.2 关联关系

配置总外设完成后，关闭外设配置界面，返回到外设配置主界面，此时可用外设下会出现已经添加外设的列表，如图 19所示。

![](../image/V3Pro/image-033.png)

-	添加关联关系
  - 选中可用外设下的某一子设备，点击“关联”，即可添加外设与大屏的关联关系。
-	移除关联关系
  - 选中可用外设下的某一子设备，点击“移除”，即可移除外设与大屏的关联关系。

### 4.5 布局配置

复杂模式或调试模式下，单击左侧工具栏中菜单项 ![](../image/V3Pro/image-034.png)，再点击 ![](../image/V3Pro/image-035.png)，进入布局设计界面，右击选择箱体，可以组合排列箱体顺序，如图 20所示。

![](../image/V3Pro/image-036.png)

#### 4.5.1 导入配置

直接导入布局配置文件，可快速点亮显示屏，无需用户进行手动配置。

1. 在工具栏中点击 ![](../image/V3Pro/image-037.png)。
2. 选择当前显示屏的配置文件。
3. 单击“打开”，等待布局加载完成。

#### 4.5.2 手动配置

##### 4.5.2.1 显示屏配置

布局设置

如果需要自定义布局，请按照以下说明进行操作。

1. 在工具栏中点击 ![](../image/V3Pro/image-038.png)，如图 21所示，设置显示屏的分辨率大小（宽度×高度），同时设置输入单个发送盒输入信号源的大小（宽度×高度）和偏移(x,y)。
2. 发送盒的添加支持在线和离线两种方式，即可以通过搜索到在线发送盒列表中选择添加，也可以通过离线方式选择发送盒添加。

![](../image/V3Pro/image-039.png)

3. 添加自定义箱体，包括命名和指定箱体的大小（宽高），按显示屏实际使用的箱体大小进行添加。
4. 布局中添加箱体支持单个箱体的添加和批量添加：

单个箱体添加：选中自定义箱体列表中的80×60，直接在图 24的布局设计界面显示屏有效范围内拖曳鼠标完成。

批量箱体添加：单击 ![](../image/V3Pro/image-040.png)，如图 22所示，选中自定义箱体80×60，设置行列箱体数量，单击确定。

![](../image/V3Pro/image-041.png)

5. 发送盒和箱体连线：
6. V3US02发送盒同时支持网口接线和光纤接线，点击设备条目后方的 ![](../image/V3Pro/image-042.png)-光纤接线即可切换。

![](../image/V3Pro/image-043.png)

网口接线和光纤接线步骤相同，以下步骤以网口接线为例进行说明，如图 24所示，可以自动连线和手动连线，两种连线方式需保证显示屏硬件系统实际电气连线方式一致：

1. 选中设备通讯端口。
2. 选中通讯端口控制的机箱阵列。
3. 自动连线需选择连线模式，手动连线需按电气连线方式顺序点击箱体完成连线。
4. 添加箱体连线后，当单网口所连机箱超出带宽限制影响时，出现网口带载判断和提示如图 25，需要重新箱体排布。

当四个屏在同一画面中的情况下，如：体育场、立柱体，布局界面如图 26所示。

![](../image/V3Pro/image-044.png)

![](../image/V3Pro/image-045.png)

![](../image/V3Pro/image-046.png)

参数固化

部分发送盒支持参数固化功能。布局设置完成后，通过启用参数固化，在客户端或服务器离线时，能够确保画面显示正常。启用固化并点击 ![](../image/V3Pro/image-047.png)，参数固化成功后，出现如图 27界面。

- 固化已启用
	- V3Pro离线时，发送盒自动将固化参数定时发送到扫描板。
	- V3Pro在线时，若改变V3Pro的控制参数，会导致显示屏显示亮度、色彩等冲突，引起显示画面异常。

  因此，改变V3Pro的控制参数后，需重新参数固化，保持固化数据和当前软件的控制参数统一，避免引起异常。
  
- 固化未启用，参数固化成功

发送盒不发送固化参数给扫描板，即较长时间运行大屏情况下仍需保证V3Pro在线。

![](../image/V3Pro/image-048.png)

双卡模式

双卡箱体（主备扫描板）布局功能。在 ![](../image/V3Pro/image-049.png)中开启双卡模式并确定，布局界面切换到双卡布局模式。双卡布局首先对主卡部分进行布局，主卡布局和常规的箱体布局完全一致。主卡布局完成后切换到备卡视图，选择备卡网口，右键点击箱体选择备卡连线。

![](../image/V3Pro/image-050.png)

![](../image/V3Pro/image-051.png)

单机双卡

同一个发送盒主网口接主卡，备网口接备卡。

布局中只需正常连接网口即可，备卡无需在布局中展现。

![](../image/V3Pro/image-052.png)

##### 4.5.2.2 模条屏配置

如果需要自定义布局，请按照以下说明进行操作。

![](../image/V3Pro/image-053.png)

模条屏中的“分控器”在系统拓扑中相当于显示屏的“扫描板”。

- 调用库管理

一个模条屏往往由特定几种灯条和分控器组成，调用库就是对这些灯条组件和分控器组件进行管理，以便在后续的操作中能复用这些组件。

在布局界面点击“调用库”，进入调用库管理界面：

![](../image/V3Pro/image-054.png)

- 灯条组件编辑：支持灯条组件的添加、删除、顺序调整。
  - 添加时，在图 31中选择“灯条库”，然后点击“导入”，选择相应的灯条文件即可。
- 分控器组件编辑：支持分控器组件的添加、删除、编辑、顺序调整。
  - 添加时，在图 31中选择“分控器库”，然后点击“添加”，进入编辑界面：

![](../image/V3Pro/image-055.png)

上图表示已添加了一根从左往右的灯条，选中灯条后右侧属性栏会显示详细信息。以下为编辑灯条属性的功能介绍和编辑端口的功能介绍。

- 编辑灯条属性

表 2 编辑灯条属性表

|功能|说明|
|-----------|-----------|
|修改灯条位置         |画布上拖动或右侧属性栏直接输入坐标|
|灯条对齐、镜像        |选中多根灯条后，利用工具栏 ![](../image/V3Pro/image-056.png)进行对齐和镜像|
|设置灯条所在端口      |选中灯条后，在右侧属性栏进行设置|
|删除灯条             |选中灯条后，利用工具栏上 ![](../image/V3Pro/image-057.png)进行删除|
|撤销、恢复           |选中灯条后，利用工具栏上 ![](../image/V3Pro/image-058.png)进行撤销、恢复|
|锁定画布             |利用工具栏的 ![](../image/V3Pro/image-059.png)可进行画布的锁定与解锁，锁定后不可编辑灯条，以防误操作|

- 编辑端口

![](../image/V3Pro/image-060.png)

表 3 编辑端口表

|菜单              |说明|
|-----------|-----------|
|对调端口           |端口A与端口B对调：1.	互换端口AB下灯条的连接关系，即“原端口A下的灯条变更到端口B下，原端口B下的灯条变更到端口A下”2.	端口AB下灯条的位置不变|
|克隆端口           |将端口A克隆到端口B：删除端口B上原来的灯条，将端口A的灯条复制一份给端口B|
|向上/下插入端口     |在选中端口上（下）面插入一个端口|
|向上/下对调端口     |将选中端口与其上（下）面的端口交换顺序|
|复制端口           |将选中端口复制一份并加到分控器的最后面|
|删除端口           |删除选中端口|

- 调用库导入、导出、清空

![](../image/V3Pro/image-061.png)

- 布局配置
	- 设置整屏参数

通过工具栏 ![](../image/V3Pro/image-062.png)设置整屏参数。

![](../image/V3Pro/image-063.png)

在做模条屏布局时，分控器组件以及往画布上添加分控器，都是按物理尺寸(mm)来描述的，但是最后下发给发送盒的是分辨率，所以上图中“大屏区域”和“信号设置”指出了物理尺寸和分辨率的折算关系。

- 编辑发送盒、接收盒

支持发送盒、接收盒的添加、删除及属性设置。

![](../image/V3Pro/image-064.png)

在布局界面点击“设备”，进入设备管理界面：

如上图所示，可以选择“添加”，手动添加发送盒；也可选择“搜索”，添加系统中已有的发送盒。

上图中选择“设置”，可设置分控器自动编址时的起始IP。

添加完发送盒后的效果如下图所示，点击发送盒旁边的 ![](../image/V3Pro/image-065.png)可设置属性。

![](../image/V3Pro/image-066.png)

上图中，点击发送盒光纤口后面的 ![](../image/V3Pro/image-067.png)，可以在光纤口下添加接收盒，添加完接收盒的效果如下图所示。

![](../image/V3Pro/image-068.png)

用户根据实际情况，可以添加多个发送盒、接收盒。

- 在画布上编辑分控器

![](../image/V3Pro/image-069.png)

这是模条屏布局中最重要的工作之一！

用户需要在画布上以分控器组件为单位，根据分控器的实际安装情况，进行分控器的添加、删除、修改位置。

![](../image/V3Pro/image-070.png)

- 以下为编辑分控器的功能介绍。
	- 编辑分控器

表 4 编辑分控器表

|功能    |说明|
|-----------|-----------|
|修改分控器位置    |画布上拖动或右侧属性直接输入坐标|
|分控器对齐、镜像  |选中多根灯条后，利用工具栏 ![](../image/V3Pro/image-071.png)进行对齐和镜像|
|分控器复制、粘贴  |通过右键菜单来实现复制、粘贴 ![](../image/V3Pro/image-072.png)粘贴时是粘贴到右键所在的位置|
|删除分控器       |选中灯条后，利用右键菜单或工具栏上 ![](../image/V3Pro/image-073.png)进行删除|
|切换组件类型     |在右侧属性栏修改组件类型|
|撤销、恢复       |选中灯条后，利用工具上 ![](../image/V3Pro/image-074.png)进行撤销、恢复|

- 绑定

通过绑定我们可以明确分控器和接收盒网口的接线关系以及接收盒网口下分控器的接线顺序。画布上的分控器都要绑定到接收盒的网口下。

![](../image/V3Pro/image-075.png)

通过右键菜单或工具栏上 ![](../image/V3Pro/image-076.png)可解除分控器的绑定。

通过工具栏上 ![](../image/V3Pro/image-077.png)可在两个视图下切换（只有绑定视图才会像图 40那样显示分控器间的连线）。为了便于区分，接收盒不同网口下的分控器会以不同颜色显示。

- 区域、标签、背景图

在画布上布局时为了便于定位分控器，增加了区域、标签、背景图等辅助功能。

![](../image/V3Pro/image-078.png)

在布局界面的左下角，会列出所有的区域、标签、背景图。

以下为区域、标签、背景图及其它辅助功能的相关介绍。

- 区域

点击 ![](../image/V3Pro/image-079.png)，在区域下拉菜单进行操作。

![](../image/V3Pro/image-080.png)

添加区域后的效果如下：

![](../image/V3Pro/image-081.png)

表 5 区域表

|功能    |说明|
|-----------|-----------|
|删除              |通过右键菜单或工具栏上 ![](../image/V3Pro/image-082.png)进行删除|
|区域编辑           |在右侧属性栏修改参数或通过鼠标拖拽改变位置|
|区域锁定/解锁       |锁定后，区域不可操作，以防误操作|
|区域显示/隐藏       |/|

- 标签
点击 ![](../image/V3Pro/image-083.png)，在标签下拉菜单进行操作。

![](../image/V3Pro/image-084.png)

添加标签后的效果如下：

![](../image/V3Pro/image-085.png)

表 6 标签表

|功能             |说明|
|-----------|-----------|
|删除             |通过右键菜单或工具栏上 ![](../image/V3Pro/image-086.png)进行删除|
|标签复制、粘贴     |通过右键菜单来实现复制、粘贴 ![](../image/V3Pro/image-087.png)粘贴时是粘贴到右键所在的位置|
|标签编辑          |在右侧属性栏修改参数或通过鼠标拖拽改变位置|
|标签锁定/解锁      |锁定后，标签不可操作，以防误操作|
|标签显示/隐藏      |/|

- 背景图
点击 ![](../image/V3Pro/image-088.png)，在背景图下拉菜单进行操作。

![](../image/V3Pro/image-089.png)

背景图支持JPG、PNG、BMP三种格式，它可以是来自CAD导出的图片。导入背景图后的效果如下：

![](../image/V3Pro/image-090.png)

表 7 背景图表

|功能            |说明|
|-----------|-----------|
|删除            |通过右键菜单或工具栏上 ![](../image/V3Pro/image-091.png)进行删除|
|背景图编辑       |在右侧属性栏修改参数或通过鼠标拖拽改变位置|
|背景图锁定/解锁   |锁定后，背景图不可操作，以防误操作|
|背景图显示/隐藏   |/|

- 其它辅助功能

工具栏上其它辅助功能介绍如下：

表 8其它辅助功能表

|功能          |说明|
|-----------|-----------|
|锁定画布       |通过工具栏上 ![](../image/V3Pro/image-092.png)可锁定画布，锁定画布后不可在画布上操作|
|整屏显示       |通过工具栏上 ![](../image/V3Pro/image-093.png)可选择显示整屏还是只显示某个发送盒下的分控器|
|布局导入/导出   |通过工具栏上 ![](../image/V3Pro/image-094.png)可将布局导入导出|
|布局合并       |通过工具栏上 ![](../image/V3Pro/image-095.png)可将其他布局合并到当前布局|

- 布局检查

![](../image/V3Pro/image-096.png)

这是模条屏布局中最重要的工作之一！

模条屏由于项目的特殊性，现场的安装往往和设计图不一致，因此需要通过布局检查功能来确定哪里不一致，然后对不一致的地方进行修改。软件提供以下功能用于排查问题：

表 9布局检查表

|功能              |说明|
|-----------|-----------|
|拓扑对比           |![](../image/V3Pro/image-097.png)搜索在线设备和布局设备进行对比，用于排查现场接线和网络通信，验证发送盒、接收盒、分控器之间的网线和光纤线的连接|
|整屏调试           |![](../image/V3Pro/image-098.png)整屏点亮和整屏黑，指定点亮颜色和亮度，验证是否所有分控器受控，不受控的分控器表示网络连线不正确，需要检查分控器的连接|
|分控器调试         |![](../image/V3Pro/image-099.png)点亮指定分控器，检查实际点亮位置是否和布局一致，用于排查布局的分控器之间连线，当位置不一致时，需要检查分控器间的连接顺序|
|十字线检查         |![](../image/V3Pro/image-100.png)整屏亮十字线，通过横竖方向的直线检查分控器之间的相对位置，当发现不在同一直线上时，检查布局分控器的位置|
|分控器内部检查      |![](../image/V3Pro/image-101.png)在单个分控器内部检查，点亮指定端口，排查端口连线顺序，内部走线，检查灯条的连接顺序|

- 调试模式

整屏布局做好并发送到服务端以后，点击布局界面右上角的 ![](../image/V3Pro/image-102.png)图标进入调试模式，如图 48所示：

![](../image/V3Pro/image-103.png)

- 拓扑对比

用于排查现场接线和网络通信，验证发送盒、接收盒、分控器之间的网线和光纤线的连接。

通过工具栏 ![](../image/V3Pro/image-104.png)，软件会查询网络中的设备信息并与布局做对比。实际设备信息与布局不一致时，会在UI给出提示，并支持导出对比信息，如图 49所示：

![](../image/V3Pro/image-105.png)

上图中表示有123个设备未搜索到，当检查完连线，确定所有设备都上电且接好以后，可以点击 ![](../image/V3Pro/image-106.png)按钮重新搜索对比，也可以导出当前的对比信息，点击 ![](../image/V3Pro/image-107.png)按钮，选择存放路径，软件会把对比信息导出存为一个TXT文件，可以拿着这个文件去检查连线。

- 整屏调试

用于检查所有分控器是否在线，通信是否正常。

通过工具栏 ![](../image/V3Pro/image-108.png)进入整屏调试模式，默认点亮所有分控器，可通过右侧状态栏整屏定位来切换整屏亮和整屏暗，如图 50所示：

![](../image/V3Pro/image-109.png)

可通过上图中的 ![](../image/V3Pro/image-110.png)按钮，打开修改点亮颜色和亮度，如图 51所示：

![](../image/V3Pro/image-111.png)

- 分控器调试

用于判断分控器间连线顺序是否一致。

通过工具栏 ![](../image/V3Pro/image-112.png)切换到分控器调试界面，界面如下：

![](../image/V3Pro/image-113.png)

分控器调试可以通过右侧状态栏，修改选中颜色、亮度以及未选中分控器颜色和亮度，上图中，表示左上角分控器亮白色，亮度30，剩余分控器亮红色，亮度20。改选中分控器支持多选。

- 十字线检查

用于检查分控器间的相对位置是否一致。

通过工具栏 ![](../image/V3Pro/image-114.png)切换，通过调整十字线的颜色、粗细、位置来观看效果，如图 53所示：

![](../image/V3Pro/image-115.png)

使用键盘的上下左右键来移动十字线，通过改变十字线的位置来定位和检查分控器相对位置。

- 分控器内部检查

用于检查分控器内的端口连线是否一致。

通过工具栏 ![](../image/V3Pro/image-116.png)切换到分控器内部检查，分控器内部检查分三个功能，内部走线检查，端口间检查，端口内检查。通过选中分控器右键菜单进入该分控器内部检查，如图 54所示：

![](../image/V3Pro/image-117.png)

内部走线检查、端口间检查和端口内检查分别介绍如下：

- 分控器内部走线检查

用于检查单个分控器内部的走线。

通过 ![](../image/V3Pro/image-118.png)进入单个分控器内部检查模式，界面如图 55所示：

![](../image/V3Pro/image-119.png)

可在当前分控器内部走横线竖线方式来检查，横线竖线可通过右侧按钮进行切换，线条粗细，线条颜色，背景颜色以及亮度都在右侧进行修改，通过键盘的上下左右建改变线条位置。

- 分控器端口间检查

用于检查端口间的连接顺序。

通过 ![](../image/V3Pro/image-120.png)进入端口间检查模式，界面如图 56所示：

![](../image/V3Pro/image-121.png)

在当前分控器选中端口或者灯条，点亮对应端口，点亮颜色亮度同样可在左侧进行更改，当发现点亮的端口与实际接线不一致时，可直接在当前界面与其他灯条进行端口交换，直接点击灯条前面的 ![](../image/V3Pro/image-122.png)交换图标进行交互。

- 分控器端口内检查

用于检查端口内的逻辑像素顺序

通过 ![](../image/V3Pro/image-123.png)进入单个分控器内部检查模式，界面如图 57所示：

![](../image/V3Pro/image-124.png)

使用键盘左右键来移动点亮的像素，通过屏上实际点亮像素来排查端口内顺序。

参数固化

调试过程中，通过工具栏 ![](../image/V3Pro/image-125.png)将布局信息下发到硬件查看效果。调试完成后，通过工具栏 ![](../image/V3Pro/image-126.png)将布局信息固化到硬件。

#### 4.5.3 高速屏配置

高速屏布局配置方法与全彩屏基本相同，区别在于高速屏的箱体需配置属性，配置界面如图 58所示：

![](../image/V3Pro/image-127.png)

### 4.6 亮度色彩

复杂模式或调试模式下，单击左侧工具栏的菜单项 ![](../image/V3Pro/image-128.png)，亮度色彩控制包括亮度调节、伽马调节、色温调节和色域调节四个部分。

#### 4.6.1 亮度调节

在亮度色彩控制页面，单击亮度调节，进入亮度调节页面 ![](../image/V3Pro/image-129.png)。亮度调节分为手动调节和自动调节。

- 手动调节方式
  - 单击“选择调节方式”下的“手动”进入手动调节模式。通过单击“＋”、“－”或拖动滑块改变亮度值。

![](../image/V3Pro/image-130.png)

- 自动调节方式
  - 单击“选择调节方式”下的“自动”进入自动调节模式。自动模式分为时间表调节、环境亮度调节、硬件调节三种调节方式。

![](../image/V3Pro/image-131.png)

- 时间表调节
  - 时间表调节可实现定时自动调节亮度，用户可通过新建时间表来灵活设置不同的亮度时间表。

①	单击“新建时间表”，自动生成一个名为“亮度时间表”的时间表，如图 61。

![](../image/V3Pro/image-134.png)

②	选中当前时间表，单击“删除”即可删除当前时间表，选择“编辑”进入亮度时间表编辑界面如图 62。

![](../image/V3Pro/image-136.png)

③	填写时间表名称，单击“添加”，生成默认时间表项。选中当前时间表项，单击“删除”,可删除当前时间表项，选择“编辑”进入时间表项编辑界面如图 63。

![](../image/V3Pro/image-137.png)

④	在时间表项中可设置时间表的起止日期、重复周期、开始结束时间和指定亮度，设置成功单击“保存”即可。

- 环境亮度调节

环境亮度调节的目的是实现根据亮度传感器探测到的环境亮度自动调节大屏的亮度。

①	单击“环境亮度调节”进入环境亮度调节界面如图 64。

![](../image/V3Pro/image-138.png)

![](../image/V3Pro/image-139.png)

②	单击“调光表设置”进入环境调光表设置界面如图 66，界面中横坐标表示传感器探测的环境亮度值，纵坐标表示待设置的大屏亮度值，通过拖动曲线设置环境亮度调光表。

![](../image/V3Pro/image-143.png)

- 硬件调节

硬件调节由发送盒调节亮度，软件不参与调节。

- 更多亮度配置

在亮度色彩控制页面，单击亮度调节，进入亮度调节页面 ![](../image/V3Pro/image-144.png)。

![](../image/V3Pro/image-145.png)

点击电流增益选择方案。或点击自定义方案进行手动设定。

![](../image/V3Pro/image-146.png)

选中方案后，可点击上方编辑和删除，或右键弹出菜单项。

![](../image/V3Pro/image-149.png)

双击可直接进入方案编辑界面。

![](../image/V3Pro/image-150.png)

#### 4.6.2 伽马调节

在亮度色彩控制页面，单击伽马调节，进入伽马调节页面 ![](../image/V3Pro/image-151.png)。伽马调节分为手动调节和时间表两种方式。

- 手动调节方式

单击“选择调节方式”下的“手动”进入手动调节模式如图 71。通过单击“＋”、“－”或拖动滑块改变伽马值，可调节的伽马值范围为1.0-4.0。

![](../image/V3Pro/image-152.png)

- 时间表调节方式
  - 单击“选择调节方式”下的“时间表”进入时间表调节模式如图 72。
  - 时间表调节的目的是实现定时自动调节伽马值，用户可通过新建时间表来灵活设置不同的伽马时间表。

![](../image/V3Pro/image-153.png)

1. 单击“新建时间表”，自动生成一个名为“伽马时间表”的伽马时间表。
2. 单击“删除”即可删除当前时间表，选择“编辑”进入伽马时间表编辑界面。
3. 填写时间表名称，单击“添加”，生成默认时间表项。选中当前时间表项，单击“删除”可删除当前时间表项，选择“编辑”进入时间表项编辑界面。
4. 在时间表项编辑界面中可设置时间表的起止日期、重复周期、开始结束时间和指定亮度，设置成功单击“保存”即可。

#### 4.6.3 色温调节

在亮度色彩控制页面，单击色温调节，进入色温调节界面 ![](../image/V3Pro/image-154.png)。色温调节分为手动调节、时间表调节两种方式。

- 手动调节方式

单击“选择调节方式”下的“手动”进入手动调节模式，通过单击“＋”、“－”或拖动滑块改变色温值，可调节的色温值范围为1700K-10000K。

![](../image/V3Pro/image-155.png)

单击“高级”展开白平衡调节功能。

![](../image/V3Pro/image-156.png)

- 时间表调节方式
  - 单击“选择调节方式”下的“时间表”进入时间表调节模式如图 75。
  - 时间表调节的目的是实现定时自动调节色温值，用户可通过新建时间表来灵活设置不同的色温时间表。

![](../image/V3Pro/image-157.png)

1. 单击“新建时间表”，自动生成一个名为“色温时间表”的时间表。
2. 选中当前时间表，单击“删除”即可删除当前时间表，选择“编辑”进入色温时间表编辑界面。
3. 填写时间表名称，单击“添加”，生成默认时间表项。选中当前时间表项单击“删除”可删除当前时间表项，选择“编辑”进入时间表项编辑界面。
4. 在时间表项编辑界面中可设置时间表的起止日期、重复周期、开始结束时间和指定亮度，设置成功单击确定即可。
5. 另外，单击“色温表”进入色温白平衡对照表的编辑，如果未编辑色温白平衡对照表，软件会读取内置默认的色温白平衡对照表。

#### 4.6.4 色域调节

在亮度色彩界面，点击色域调节进入色域调节界面。

![](../image/V3Pro/image-158.png)

默认模式下发送出厂设置的9系数。即64，0，0，0，64，0，0，0，64九系数。

![](../image/V3Pro/image-159.png)

色域调节支持PAL、NTSC和Rec.709这三种标准制式，用户可按显示要求选择其中的一种点击“发送”按钮显示屏显示该色域。

色域调节同时自持上述三种标准制式以外的自定义设置，点击 ![](../image/V3Pro/image-160.png)，将出现如图所示 ![](../image/V3Pro/image-161.png)，默认色域取值同标准制式的PAL，用户可以自定义进行调节修改，步骤如下。

1. 在屏幕上分别显示红绿蓝三种纯色，使用色温枪测出RGB坐标及亮度并记录。
2. 选择自定义并进入设置色域界面，新建色域表，将刚才测出的RGB坐标和亮度填入原始色域对应的输入框内。

![](../image/V3Pro/image-162.png)

3. 点击原始色域启用色温选项，将色温值调到6500K（推荐值），白平衡亮度略微调小。
4. 根据需求填入目标色域值（用户需求）或点击左侧色域坐标图确定RGB坐标点。
5. 点击目标色域启用色温按钮，将色温值调到6500K（推荐值），调整白平衡亮度（比原始色域白平衡亮度小）。
6. 目标色域：界面左边的色域图中黑色三角形是目标色域的范围，通过拖动鼠标改变四色目标点，或者直接修改目标色域各系数，点击“发送”后在显示屏上预览调节效果。
7. 点击发送，查看屏幕上色彩的变化。

#### 4.6.5 高画质

本功能仅对扫描板类型为V3CG03、V3CH02支持使用，V3CG01和V3CG02如要使用此功能，需将固件FLB版本升级到3.xxx以上。
亮度色彩界面点击 ![](../image/V3Pro/image-163.png)进入界面，高画质可开启灰度精细调节、灰度等级拓展进行设置，默认为不启用。

![](../image/V3Pro/image-164.png)

![](../image/V3Pro/image-166.png)

灰度等级拓展使能开启时，调节范围为1-6。

### 4.7 画面控制

复杂模式或调试模式下，单击左侧工具栏的菜单项“画面控制”，如图所示，画面控制分为基础设置和高级设置两部分。

#### 4.7.1 基础设置

![](../image/V3Pro/image-167.png)

- 画面设置
    - 单击“正常”显示画面恢复为正常输入信号。
    - 单击“黑屏”显示画面为黑屏。
    - 单击“锁屏”显示画面为冻结当前帧。
- 信号源切换
    - 单击“自动”表示大屏显示当前接入的信号源。
    - 单击“信号源-1”表示大屏显示信号源-1的信号。
    - 单击“信号源-2”表示大屏显示信号源-2的信号。
- 待机模式
    - 待机颜色，红、绿、蓝可分别勾选，默认为3基色全选中。
    - 待机灰度等级，范围0-255。
    - 最大亮度使能，使能开启时，待机亮度为100，使能关闭时，待机亮度为原亮度。
- 视觉模式
    - 可以自主切换2D模式和3D模式。3D模式需要连接相应的发送盒及扫描板，通过单击“+”、“－”或拖动滑块改变3D相位设置，默认情况下选择“2D模式”。
- HDR设置
    - 控制开关发送盒的HDR功能。部分发送盒支持此功能。

#### 4.7.2 高级设置

![](../image/V3Pro/image-168.png)

- 无信号显示
	- 无信号显示时（发送盒未连接输入显示信号源或信号源故障），可设置大屏为保持最后一帧画面、黑屏、待机画面和demo画面；其中设置为demo画面时，需在预置画面功能中，先上传预置图片，否则可能出现显示异常。
- 缩放处理
	- 本功能需分别对水平方向和垂直方向进行设置，缩放模式包括无处理、放大1.25倍、放大1.5倍、放大2倍、缩小0.5倍、自动缩放共6种模式，默认情况下选择“无处理”模式，即不缩放。
本功能只能在单屏单发送盒情况下使用。
- 信号源模式
	- 当单个发送盒控制显示屏分辨率超出1080P时，2K发送盒可以不依赖第三方视频处理设备进行控制，软件通知发送盒当前信号输出扩展模式：
    - 单显：不开启联动模式。
    - 双链：开启DualLink联动模式。
    - 左右拓展：开启左右扩展联动模式。
    - 上下拓展：开启上下扩展联动模式。

![](../image/V3Pro/image-169.png)

V3S2D6GF支持单显、左右拓展、上下拓展三种模式。

V3SHD6GF支持单显、双链两种模式。

- PFPC控制
	- PFPC只能在单屏单发送盒情况下开启使用，否则会导致不同发送盒带载区域显示亮暗不一致，因此在单屏多发送盒使用场合，PFPC功能需关闭使用。PFPC功能针对不同的发送盒类型分为2种使用模式：
		- 模式1：仅V3FS01和V3HS02发送盒设备支持

![](../image/V3Pro/image-170.png)

- 立即变换使能：开启时，变换速度参数无效，即显示屏显示按设置的PFPC参数和RGB电流值立即生效；关闭时，变换速度参数生效，即显示屏显示按设置的PFPC参数和RGB 电流值有个渐变过程。
- 变换速度：参数设置范围1-63，值越大，速度越快；在立即变换使能开启时有效。
- PFPC参数：电源负载能力与最大亮度的百分比，即动态调整的比率；参数设置范围1-128，值越小显示亮度越低，功率越小。
- RGB电流：R、G、B三基色显示电流在三基色电流和中所占百分比。
	- 模式2：除模式1所列发送盒类型外其它型号发送盒设备支持
  
  此模式下，只有PFPC使能开关，无其它参数设置

- 预置画面
	- 将一张图片（bmp或jpg格式）固化到显示屏，在画面控制设置”无信号输入时显示demo”时，显示屏在无信号接入情况下，默认显示该预置画面。

### 4.8 电源控制

- 复杂模式或调试模式下，选中 ![](../image/V3Pro/image-171.png)即可进入电源控制界面，电源控制方式分为手动控制和时间表控制两种方式，通过切换“手动”和“时间表”可以切换电源控制方式。使用电源控制前，需要先关联PLC外设。
- 手动方式

如图 84所示，可以通过点击单独一路电源通道的状态达到单独控制某一路电源的目的，也可以通过一键上下电控制所有电源通道。

![](../image/V3Pro/image-172.png)

- 时间表方式

a. 按自定义计划时间表设置电源开关控制，点击“新建”创建电源控制计划时间表，如图 85所示。

![](../image/V3Pro/image-173.png)

b. 通过“编辑”自定义时间表具体内容。

每个时间表可以通过“添加”设置多个时间表项设置开关电源控制，如图 86示。

![](../image/V3Pro/image-174.png)

时间表项可通过“编辑”操作设置起止日期范围、每周的重复日期和开关电源时间，可整屏电源控制或者选择通道控制如图 87所示。

![](../image/V3Pro/image-175.png)

点击“删除”移去不使用的时间表项。

c. “激活”和“删除”时间表。

显示屏关联的电源控制时间表可以有多个表存在，对于不使用的时间表可以通过“删除”操作移去。

显示屏有多个电源控制时间表存在时，只能一个表有效，用户可以选择待使用的时间表通过“激活”操作使其有效。

### 4.9 状态监控

#### 4.9.1 监控信息

在首页中点击 ![](../image/V3Pro/image-176.png)进入状态监控界面，如图 88所示。状态监控支持发送盒、扫描板和面板及各种传感器的状态信息。

![](../image/V3Pro/image-177.png)

- 发送盒和接收盒状态

布局配置中关联发送盒、接收盒后，可在监控界面中查看发送盒、接收盒状态。

单击 ![](../image/V3Pro/image-178.png)，显示当前发送盒、接收盒连接图，设备运行状态数据，包括信号源状态，控制大小、运行时间、工作电压和温度、网口数量等信息，每个网口显示当前链接状态、控制的扫描板起始IP地址等信息。

![](../image/V3Pro/image-179.png)

- 扫描板状态

单击 ![](../image/V3Pro/image-180.png)，显示当前屏体中所有扫描板的即时状态数据，包括控制机箱大小和偏移、运行时间、工作电压和温度、链接状态和误码数等信息。选中扫描板右键，可以获取调试信息和远程调试，同时还支持设备定位功能。

![](../image/V3Pro/image-181.png)

- 传感器状态

    外部设置中关联发送盒后，可在监控界面中查看传感器状态。

    - 单击 ![](../image/V3Pro/image-182.png)，显示当前显示屏下关联的各亮度传感器采集得到的环境光数值。
    - 单击 ![](../image/V3Pro/image-183.png)，显示当前显示屏下关联的各烟雾传感器采集得到的烟雾告警状态。
    - 单击 ![](../image/V3Pro/image-184.png)，显示当前显示屏下关联的各温度传感器采集得到的温度值。
    - 单击 ![](../image/V3Pro/image-185.png)，显示当前显示屏各电源通道的开启状态。

- 面板状态
  
    单击 ![](../image/V3Pro/image-186.png)，显示当前屏体中所有面板的工作状态。

#### 4.9.2 告警、策略配置

在调试模式中，选中 ![](../image/V3Pro/image-187.png)，进入状态监控界面，点击右上角 ![](../image/V3Pro/image-188.png)，弹出如图 91、图 92所示配置界面。

- 告警配置可设置是否启用告警及告警的阈值。
- 策略配置可启用烟雾报警策略。当发生烟雾报警时，在配置程控电源设备（PLC或V3Check）情况下关闭显示屏供电。
- 策略配置可启用温度报警策略。当温度超出阈值设定时，执行可选的关闭显示屏电源、调整显示屏亮度和关闭显示屏显示等动作。

过温保护：当采集温度值超过配置的阈值时，软件降低屏体显示亮度，达到降低工作温度的目的。

- 除潮解除。设备断电任意天后再次上电会自动开启除潮效果，输入指令可解除除潮保护。

除潮保护：最小可设置5天未开启大屏，最小保护时长可设置2小时（最大设置20天，保护时长36小时）。

- 告警，策略配置及除潮解除可提高显示屏运行的安全性。

![](../image/V3Pro/image-189.png)

![](../image/V3Pro/image-190.png)

![](../image/V3Pro/image-191.png)

### 4.10 告警邮箱

复杂模式或调试模式下，单击右上角菜单栏“![](../image/V3Pro/image-192.png)”，选择 ![](../image/V3Pro/image-193.png)，进入如图 94所示界面。邮件通知包括故障发生时发出邮件、故障恢复时发出邮件、定时发出邮件这三种方式，邮件内容通过HTML页面展现。

![](../image/V3Pro/image-194.png)

- 故障邮件通知：当显示屏设备故障发生时会主动发送邮件给收件人，设置同一故障连续出现次数为故障判定条件。邮件中绿色文字表示上一次邮件发送失败，在本次邮件发送时该设备故障已经恢复，如图 95所示。

![](../image/V3Pro/image-195.png)

- 恢复邮件通知：当设备故障恢复后会主动发送邮件通知收件人，邮件内容如图 96所示。

![](../image/V3Pro/image-196.png)

- 定时故障邮件通知：系统根据设置的时间间隔定时发送邮件通知，通知内容包括显示屏设备相关的状态信息。邮件内容展示见图 97所示，详细信息通过邮件附件的方式一起发送到收件箱。

![](../image/V3Pro/image-197.png)

- ![](../image/V3Pro/image-198.png)：邮件标题可以任意设置，可选择默认邮箱发送（无须其它设置），也可以自定义发件服务器设置（设置邮箱用户名和密码、发件服务器地址和端口号、是否启用SSL加密等），见图 98。

![](../image/V3Pro/image-199.png)

- 隐私声明
	- 当您配置并启用邮箱告警以后，软件会记录并保存您所输入的邮箱地址。邮箱地址只用于向您发送显示屏告警信息，我们通过TSL加密传输给服务端进行存储，并且服务端是加密存储，您的邮箱地址不会以明文的方式出现在任何日志或者其他文件内，不会用于其他用途，不会转交第三方用户。
	- 启用本功能即表示您同意此隐私政策的条款和条件，如果您不同意以上条款，请勿启用邮件告警功能。我们保留权利，在我们决定更改，修改，增加或删除本声明的部分，在任何时候。请定期查阅任何修改。如果您继续使用我们的软件以后的任何更改这些条款的发布将意味着你已经接受了这些调整。

### 4.11 一键诊断

复杂模式或调试模式下，单击右上角菜单栏“![](../image/V3Pro/image-200.png)”，选择![](../image/V3Pro/image-201.png)，进入如图 94所示界面。选择需要诊断的大屏，选择诊断时间后点击开始诊断。开始诊断后大屏将进入诊断模式，无法进行其他操作。诊断完成后可以看到诊断结果。

![](../image/V3Pro/image-202.png)

![](../image/V3Pro/image-203.png)

![](../image/V3Pro/image-204.png)

### 4.12 定时器配置

复杂模式或调试模式下，单击右上角菜单栏“![](../image/V3Pro/image-205.png)”，选择![](../image/V3Pro/image-206.png)，进入如图 94所示界面。可在定时器配置界面自定义配置定时进行的控制功能和查询功能。

- 控制功能：定时发送，布局信息（发送盒、扫描板），大屏亮度（亮度、电流增益、低灰参数），大屏色彩（Gamma、内置Gamma标志、色温/白平衡、色域9系数），大屏显示（当前信号源、无信号显示、信号源输入模式、双卡模式），时间同步（发送盒液晶时间），间隔时间根据需求可修改。
- 查询功能：定时查询，发送盒状态（运行状态，网口连接状态、信号源状态、工作模式），扫描板状态（运行状态、网口连接状态、Gamma、亮度、面板配置、刷新率、双卡模式状态），接收盒状态（定时搜索、运行状态、网口连接状态），通信质量（发送盒通信质量、扫描板通信质量、接收盒通信质量）间隔时间根据需求可修改。

![](../image/V3Pro/image-207.png)

![](../image/V3Pro/image-208.png)

## 5 固件维护

调试模式下，左侧工具栏菜单选择“固件维护”，进入固件维护界面，如图 102所示。

目前只支持对发送盒和扫描板进行固件维护，选中所要维护的固件鼠标右击可以选择“升级固件”、“下载固件”、“获取当前版本”、“箱体配置”四种操作。

![](../image/V3Pro/image-209.png)

### 5.1 箱体配置

本功能仅对扫描板类型CFSCAN V3F、V3UC7、V3UCB_C、V3UC9、V3UC5、V3AXS和V3CXS支持，其它类型扫描板不可使用。

选中所要维护的固件鼠标右击可以选择“箱体配置”。

可设置灰度等级、DCLK周期、DCLK低电平和显示模式。

![](../image/V3Pro/image-210.png)

点击“更多配置”，进入芯片设置和参数设置界面。

![](../image/V3Pro/image-211.png)

点击“保存”，弹出模块设置界面。

![](../image/V3Pro/image-212.png)

点击“确定”，弹出上传cmf文件确认对话框。点击“确定”后开始上传cmf文件。

![](../image/V3Pro/image-213.png)

## 6 设备调试

部分硬件需要软件授权后才能正常使用。授权方法如下：

1. 单击右上角“![](../image/V3Pro/image-214.png)”，选择![](../image/V3Pro/image-215.png)。
2. 输入软件授权码，点击“确定”（授权码需联系工程师获取）。

![](../image/V3Pro/image-216.png)

设备调试功能说明如下。

单击右上角“![](../image/V3Pro/image-217.png)”，选择![](../image/V3Pro/image-218.png)进入如图 108界面。设备调试包括设备搜索、设置MAC及IP、设备定位、寄存器查看、远程调试等功能。

![](../image/V3Pro/image-219.png)

- 设备搜索：联网情况下搜索当前系统V3设备的在线情况。
- 设置MAC及IP：选中一项设备，右击可设置MAC和设置IP。设置成功后的状态为“设置MAC成功”，如图 109所示。

![](../image/V3Pro/image-220.png)

- 设备定位：右击选择“设备定位开启”，屏幕可以显示画面并确定其所在位置。
- 寄存器查看：在调试情况下，通过相关寄存器读写，排查显示异常问题是否由对应寄存器参数错误引起，如图 110所示。

![](../image/V3Pro/image-221.png)

- 远程调试：右击选择“远程调试”进入图 111所示界面，输入调试命令即可远程调试。

![](../image/V3Pro/image-222.png)

## 7 日志

### 7.1 日志查看

单击右上角![](../image/V3Pro/image-223.png)-![](../image/V3Pro/image-224.png)，选择日志类型及起止日期并点击“查询”，出现如图 108界面，可以获取硬件设备之间的通信质量日志。在线情况下，可通过配置将日志文件上传到日志平台，供可视化数据分析。

![](../image/V3Pro/image-225.png)

### 7.2 日志导出

单击右上角![](../image/V3Pro/image-226.png)-![](../image/V3Pro/image-227.png)，选择日志保存路径。

![](../image/V3Pro/image-228.png)

## 8 相关软件

### 8.1 亮度校正

点击首页![](../image/V3Pro/image-229.png)，启动V3BCorrect亮度校正软件。使用方法详见《软件用户手册_亮度校正软件_V02》。

![](../image/V3Pro/image-230.png)

### 8.2 箱体配置

本功能对V3CG01、V3CH01、V3CG02和V3CG03扫描板支持使用。

点击首页![](../image/V3Pro/image-231.png)，启动ChipConfig箱体配置软件。使用方法详见《软件使用说明书_芯片配置工具(ChipConfig)_V01》。

![](../image/V3Pro/image-232.png)

## 附录A 安装Windows版V3Pro

1.	双击运行客户端安装包，点击“Next”进入下一步。

![](../image/V3Pro/image-233.png)

2.	点击“I Agree”进入下一步。

![](../image/V3Pro/image-234.png)

3.	勾选界面如图，勾选需要安装的软件项，点击“Next”进入下一步。

![](../image/V3Pro/image-235.png)

4.	默认安装路径，点击“Install”进入下一步。

![](../image/V3Pro/image-236.png)

5.	安装完成，点击“Finish”。

![](../image/V3Pro/image-237.png)

6.	打开任务管理器服务，确认V3pro server正在运行。

![](../image/V3Pro/image-238.png)

7.	双击桌面快捷方式，运行V3Pro客户端。
8.	首次运行，请根据系统提示选择网卡。

![](../image/V3Pro/image-239.png)

![](../image/V3Pro/image-240.png)

设备通信网卡确认后提示：子网掩码应为255.255.0.0，IP地址a.b.c.d中的c<144。

a. 修改本机IP，举例如下图。

![](../image/V3Pro/image-241.png)

b. 在C:\sansitech\v3pro\configs\server文件夹中找到并修改udp.json（如图 124）和service.json文件（如图 125），port端口号可任意填写，修改后保存即可。

![](../image/V3Pro/image-242.png)

![](../image/V3Pro/image-243.png)

c. 打开服务，找到v3pro_server，打开右键菜单，点击重新启动。

![](../image/V3Pro/image-244.png)

d. 重新运行客户端。

![](../image/V3Pro/image-245.png)

- 当PC端有两张网卡时，
	- service.json中的IP地址根据实际连接了设备的网口填写。
	- udp.json中的IP地址（a.b.c.d），c应小于144。
	- 勾选IPv4和IPv6。

![](../image/V3Pro/image-246.png)

## 附录B 更新Window版V3Pro

1. 找到V3Pro安装目录，卸载旧版本V3Pro。

卸载程序将保留配置文件。

![](../image/V3Pro/image-248.png)

2. 安装最新客户端，选择与旧版客户端相同的路径，安装完成后系统将自动加载原来的配置文件。安装具体步骤详见附录A。

## 附录C 安装Linux版V3Pro

1. 获取安装包。

![](../image/V3Pro/image-249.png)

2. 打开命令行，给予安装包执行权限。

`sudo chmod 777 v3pro_*_linux_x64.bin`

![](../image/V3Pro/image-250.png)

3.	运行安装包，进入安装界面。安装界面方向键选择，Tab键切换光标，回车键确认选择。

![](../image/V3Pro/image-251.png)

4.	空格选择需要安装的软件

![](../image/V3Pro/image-252.png)

5.	输入安装路径

![](../image/V3Pro/image-253.png)

6.	安装完成

![](../image/V3Pro/image-254.png)

7.	双击桌面V3Pro.desktop，选择信任并启动。20.04版本的unbuntu需要右键点击允许启动。

![](../image/V3Pro/image-255.png)

8. 允许启动

![](../image/V3Pro/image-256.png)

9.	成功运行V3Pro。

![](../image/V3Pro/image-257.png)
