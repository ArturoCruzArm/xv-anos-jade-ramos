// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - 1119 fotos del evento
const PHOTO_FILES = [
"DJI_20251128155039_0081_D.webp","DJI_20251128155044_0082_D.webp","DJI_20260214_181055_238.webp","DJI_20260214_181101_702.webp","DJI_20260214_181203_803.webp","DJI_20260214_181224_951.webp","DJI_20260214_181233_952.webp","DJI_20260214_181238_274.webp","DJI_20260214_181243_149.webp","DJI_20260214_181315_097.webp","DJI_20260214_181433_036.webp","DJI_20260214_181437_641.webp","DJI_20260214_181441_887.webp","DJI_20260214_181447_436.webp","DJI_20260214_181452_762.webp","DJI_20260214_181455_718.webp","DJI_20260214_181510_897.webp","DJI_20260214_181544_928.webp","DJI_20260214_181552_339.webp","DJI_20260214_181613_716.webp","DJI_20260214_181647_464.webp","DJI_20260214_181649_443.webp","DJI_20260214_181700_769.webp","DJI_20260214_181702_927.webp","DJI_20260214_181823_764.webp","DJI_20260214_181825_743.webp","DJI_20260214_181828_851.webp","DJI_20260214_181847_361.webp","DJI_20260214_181949_981.webp","DJI_20260214_182001_457.webp","DJI_20260214_182006_122.webp","DJI_20260214_182008_326.webp","DJI_20260214_182010_606.webp","DJI_20260214_182013_216.webp","DJI_20260214_182050_581.webp","DJI_20260214_182100_960.webp","DJI_20260214_182110_800.webp","DJI_20260214_182120_506.webp","DJI_20260214_182128_516.webp","DJI_20260214_182142_150.webp","DJI_20260214_182205_278.webp","DJI_20260214_182218_898.webp","DJI_20260214_182232_325.webp","DJI_20260214_182404_496.webp","DJI_20260214_182512_102.webp","DJI_20260214_182514_588.webp","DJI_20260214_182518_023.webp","DJI_20260214_182529_274.webp","DJI_20260214_182540_449.webp","DJI_20260214_182550_663.webp","DJI_20260214_182655_940.webp","DJI_20260214_182700_202.webp","DJI_20260214_182805_088.webp","DJI_20260214_182920_192.webp","DJI_20260214_182935_375.webp","DJI_20260214_182940_290.webp","DJI_20260214_182955_472.webp","DJI_20260214_183015_389.webp","DJI_20260214_183037_997.webp","DJI_20260214_183044_265.webp","DJI_20260214_183116_753.webp","DJI_20260214_183250_713.webp","DJI_20260214_183255_824.webp","DJI_20260214_183300_056.webp","DJI_20260214_183316_811.webp","DJI_20260214_183550_276.webp","DJI_20260214_183552_164.webp","DJI_20260214_183556_666.webp","DJI_20260214_183607_614.webp","DJI_20260214_183610_406.webp","DJI_20260214_183740_490.webp","DJI_20260214_183813_206.webp","DJI_20260214_183845_693.webp","DJI_20260214_183947_675.webp","DJI_20260214_183959_914.webp","DJI_20260214_184109_887.webp","DJI_20260214_184155_580.webp","DJI_20260214_184200_154.webp","DJI_20260214_184938_634.webp","DJI_20260214_184947_377.webp","DJI_20260214_184952_287.webp","DJI_20260214_185108_588.webp","DJI_20260214_185110_823.webp","DJI_20260214_185118_623.webp","DJI_20260214_185126_108.webp","DJI_20260214_185148_758.webp","DJI_20260214_185150_602.webp","DJI_20260214_185243_268.webp","DJI_20260214_185313_478.webp","DJI_20260214_190530_488.webp","DJI_20260214_190538_199.webp","DJI_20260214_190546_986.webp","DJI_20260214_190549_524.webp","DJI_20260214_190551_894.webp","DJI_20260214_190710_795.webp","DJI_20260214_190714_066.webp","DJI_20260214_190717_339.webp","DJI_20260214_190719_330.webp","DJI_20260214_190722_151.webp","DJI_20260214_190810_767.webp","DJI_20260214_190813_798.webp","DJI_20260214_191009_389.webp","DJI_20260214_191019_859.webp","DJI_20260214_191025_978.webp","DJI_20260214_191029_053.webp","DJI_20260214_220355_189.webp","DJI_20260214_220401_001.webp","DJI_20260214_220403_520.webp","DJI_20260214_220409_851.webp","DJI_20260214_220413_795.webp","DJI_20260214_220418_013.webp","DJI_20260214_220421_461.webp","DJI_20260214_220426_065.webp","DJI_20260214_220428_434.webp","DJI_20260214_220435_202.webp","DJI_20260214_220438_649.webp","DJI_20260214_220449_525.webp","DJI_20260214_220506_385.webp","DJI_20260214_220508_768.webp","DJI_20260214_220530_177.webp","DJI_20260214_220535_306.webp","DJI_20260214_220607_045.webp","DJI_20260214_220609_143.webp","DJI_20260214_220612_234.webp","DJI_20260214_220615_640.webp","DJI_20260214_220622_825.webp","DJI_20260214_220631_449.webp","DJI_20260214_220641_365.webp","DJI_20260214_220643_748.webp","DJI_20260214_220655_148.webp","DJI_20260214_220657_112.webp","DJI_20260214_220703_216.webp","DJI_20260214_220712_576.webp","DJI_20260214_220737_193.webp","DJI_20260214_220745_022.webp","DJI_20260214_220801_418.webp","DJI_20260214_220806_411.webp","DJI_20260214_220818_995.webp","DJI_20260214_220822_386.webp","DJI_20260214_220825_250.webp","DJI_20260214_220831_417.webp","DJI_20260214_220838_480.webp","DJI_20260214_221033_558.webp","DJI_20260214_221035_598.webp","DJI_20260214_221037_666.webp","DJI_20260214_221045_635.webp","DJI_20260215_022015_940.webp","DJI_20260215_022018_126.webp","DJI_20260215_022023_547.webp","DJI_20260215_022032_905.webp","DJI_20260215_022049_508.webp","DJI_20260215_022059_710.webp","DJI_20260215_022105_874.webp","DSC_0001.webp","DSC_0002.webp","DSC_0003.webp","DSC_0004.webp","DSC_0005.webp","DSC_0006.webp","DSC_0007.webp","DSC_0008.webp","DSC_0009.webp","DSC_0010.webp","DSC_0011.webp","DSC_0012.webp","DSC_0013.webp","DSC_0014.webp","DSC_0015.webp","DSC_0016.webp","DSC_0017.webp","DSC_0018.webp","DSC_0019.webp","DSC_0020.webp","DSC_0021.webp","DSC_0022.webp","DSC_0023.webp","DSC_0024.webp","DSC_0025.webp","DSC_0026.webp","DSC_0027.webp","DSC_0028.webp","DSC_0029.webp","DSC_0030.webp","DSC_0031.webp","DSC_0032.webp","DSC_0033.webp","DSC_0034.webp","DSC_0035.webp","DSC_0036.webp","DSC_0037.webp","DSC_0039.webp","DSC_0040.webp","DSC_0041.webp","DSC_0042.webp","DSC_0043.webp","DSC_0044.webp","DSC_0045.webp","DSC_0046.webp","DSC_0047.webp","DSC_0048.webp","DSC_0049.webp","DSC_0050.webp","DSC_0051.webp","DSC_0052.webp","DSC_0053.webp","DSC_0054.webp","DSC_0055.webp","DSC_0056.webp","DSC_0057.webp","DSC_0058.webp","DSC_0059.webp","DSC_0060.webp","DSC_0061.webp","DSC_0063.webp","DSC_0064.webp","DSC_0065.webp","DSC_0066.webp","DSC_0067.webp","DSC_0068.webp","DSC_0069.webp","DSC_0071.webp","DSC_0073.webp","DSC_0074.webp","DSC_0075.webp","DSC_0076.webp","DSC_0077.webp","DSC_0078.webp","DSC_0079.webp","DSC_0080.webp","DSC_0081.webp","DSC_0082.webp","DSC_0083.webp","DSC_0084.webp","DSC_0085.webp","DSC_0086.webp","DSC_0087.webp","DSC_0088.webp","DSC_0089.webp","DSC_0090.webp","DSC_0091.webp","DSC_0092.webp","DSC_0093.webp","DSC_0094.webp","DSC_0095.webp","DSC_0096.webp","DSC_0097.webp","DSC_0098.webp","DSC_0099.webp","DSC_0100.webp","DSC_0101.webp","DSC_0102.webp","DSC_0103.webp","DSC_0104.webp","DSC_0105.webp","DSC_0106.webp","DSC_0107.webp","DSC_0108.webp","DSC_0109.webp","DSC_0110.webp","DSC_0111.webp","DSC_0112.webp","DSC_0113.webp","DSC_0114.webp","DSC_0115.webp","DSC_0116.webp","DSC_0117.webp","DSC_0118.webp","DSC_0119.webp","DSC_0120.webp","DSC_0121.webp","DSC_0122.webp","DSC_0123.webp","DSC_0124.webp","DSC_0125.webp","DSC_0126.webp","DSC_0127.webp","DSC_0128.webp","DSC_0129.webp","DSC_0130.webp","DSC_0131.webp","DSC_0132.webp","DSC_0133.webp","DSC_0134.webp","DSC_0135.webp","DSC_0136.webp","DSC_0137.webp","DSC_0138.webp","DSC_0139.webp","DSC_0140.webp","DSC_0141.webp","DSC_0142.webp","DSC_0143.webp","DSC_0144.webp","DSC_0145.webp","DSC_0146.webp","DSC_0147.webp","DSC_0148.webp","DSC_0149.webp","DSC_0150.webp","DSC_0151.webp","DSC_0152.webp","DSC_0153.webp","DSC_0154.webp","DSC_0155.webp","DSC_0156.webp","DSC_0157.webp","DSC_0158.webp","DSC_0159.webp","DSC_0160.webp","DSC_0161.webp","DSC_0162.webp","DSC_0163.webp","DSC_0164.webp","DSC_0165.webp","DSC_0166.webp","DSC_0167.webp","DSC_0168.webp","DSC_0169.webp","DSC_0170.webp","DSC_0171.webp","DSC_0172.webp","DSC_0173.webp","DSC_0174.webp","DSC_0175.webp","DSC_0176.webp","DSC_0177.webp","DSC_0178.webp","DSC_0179.webp","DSC_0180.webp","DSC_0181.webp","DSC_0182.webp","DSC_0183.webp","DSC_0184.webp","DSC_0185.webp","DSC_0186.webp","DSC_0187.webp","DSC_0188.webp","DSC_0189.webp","DSC_0190.webp","DSC_0191.webp","DSC_0192.webp","DSC_0193.webp","DSC_0194.webp","DSC_0195.webp","DSC_0196.webp","DSC_0197.webp","DSC_0198.webp","DSC_0199.webp","DSC_0200.webp","DSC_0201.webp","DSC_0202.webp","DSC_0203.webp","DSC_0204.webp","DSC_0205.webp","DSC_0207.webp","DSC_0208.webp","DSC_0209.webp","DSC_0210.webp","DSC_0211.webp","DSC_0212.webp","DSC_0213.webp","DSC_0214.webp","DSC_0215.webp","DSC_0216.webp","DSC_0217.webp","DSC_0218.webp","DSC_0219.webp","DSC_0220.webp","DSC_0221.webp","DSC_0222.webp","DSC_0223.webp","DSC_0224.webp","DSC_0225.webp","DSC_0226.webp","DSC_0227.webp","DSC_0228.webp","DSC_0229.webp","DSC_0230.webp","DSC_0231.webp","DSC_0232.webp","DSC_0233.webp","DSC_0234.webp","DSC_0235.webp","DSC_0236.webp","DSC_0237.webp","DSC_0238.webp","DSC_0239.webp","DSC_0240.webp","DSC_0241.webp","DSC_0242.webp","DSC_0243.webp","DSC_0244.webp","DSC_0245.webp","DSC_0246.webp","DSC_0247.webp","DSC_0248.webp","DSC_0249.webp","DSC_0250.webp","DSC_0251.webp","DSC_0252.webp","DSC_0253.webp","DSC_0254.webp","DSC_0255.webp","DSC_0256.webp","DSC_0257.webp","DSC_0258.webp","DSC_0259.webp","DSC_0260.webp","DSC_0261.webp","DSC_0262.webp","DSC_0263.webp","DSC_0264.webp","DSC_0265.webp","DSC_0266.webp","DSC_0267.webp","DSC_0268.webp","DSC_0269.webp","DSC_0270.webp","DSC_0271.webp","DSC_0272.webp","DSC_0273.webp","DSC_0274.webp","DSC_0275.webp","DSC_0276.webp","DSC_0277.webp","DSC_0278.webp","DSC_0279.webp","DSC_0280.webp","DSC_0281.webp","DSC_0282.webp","DSC_0283.webp","DSC_0284.webp","DSC_0285.webp","DSC_0286.webp","DSC_0287.webp","DSC_0288.webp","DSC_0289.webp","DSC_0290.webp","DSC_0291.webp","DSC_0292.webp","DSC_7049.webp","DSC_7050.webp","DSC_7051.webp","DSC_7052.webp","DSC_7053.webp","DSC_7054.webp","DSC_7055.webp","DSC_7056.webp","DSC_7057.webp","DSC_7058.webp","DSC_7059.webp","DSC_7060.webp","DSC_7061.webp","DSC_7062.webp","DSC_7063.webp","DSC_7064.webp","DSC_7065.webp","DSC_7066.webp","DSC_7067.webp","DSC_7068.webp","DSC_7069.webp","DSC_7070.webp","DSC_7071.webp","DSC_7072.webp","DSC_7073.webp","DSC_7074.webp","DSC_7075.webp","DSC_7076.webp","DSC_7077.webp","DSC_7078.webp","DSC_7079.webp","DSC_7080.webp","DSC_7081.webp","DSC_7082.webp","DSC_7083.webp","DSC_7084.webp","DSC_7085.webp","DSC_7086.webp","DSC_7087.webp","DSC_7088.webp","DSC_7089.webp","DSC_7090.webp","DSC_7091.webp","DSC_7092.webp","DSC_7093.webp","DSC_7094.webp","DSC_7095.webp","DSC_7096.webp","DSC_7097.webp","DSC_7098.webp","DSC_7099.webp","DSC_7100.webp","DSC_7101.webp","DSC_7102.webp","DSC_7103.webp","DSC_7104.webp","DSC_7105.webp","DSC_7106.webp","DSC_7107.webp","DSC_7108.webp","DSC_7109.webp","DSC_7110.webp","DSC_7111.webp","DSC_7112.webp","DSC_7113.webp","DSC_7114.webp","DSC_7115.webp","DSC_7116.webp","DSC_7117.webp","DSC_7118.webp","DSC_9569.webp","DSC_9570.webp","DSC_9571.webp","DSC_9572.webp","DSC_9573.webp","DSC_9574.webp","DSC_9575.webp","DSC_9576.webp","DSC_9577.webp","DSC_9578.webp","DSC_9579.webp","DSC_9580.webp","DSC_9581.webp","DSC_9582.webp","DSC_9583.webp","DSC_9585.webp","DSC_9586.webp","DSC_9587.webp","DSC_9588.webp","DSC_9589.webp","DSC_9590.webp","DSC_9591.webp","DSC_9592.webp","DSC_9593.webp","DSC_9594.webp","DSC_9595.webp","DSC_9596.webp","DSC_9597.webp","DSC_9598.webp","DSC_9599.webp","DSC_9600.webp","DSC_9601.webp","DSC_9602.webp","DSC_9603.webp","DSC_9604.webp","DSC_9605.webp","DSC_9606.webp","DSC_9607.webp","DSC_9608.webp","DSC_9609.webp","DSC_9610.webp","DSC_9611.webp","DSC_9612.webp","DSC_9614.webp","DSC_9615.webp","DSC_9616.webp","DSC_9618.webp","DSC_9619.webp","DSC_9620.webp","DSC_9621.webp","DSC_9622.webp","DSC_9623.webp","DSC_9624.webp","DSC_9625.webp","DSC_9626.webp","DSC_9627.webp","DSC_9628.webp","DSC_9629.webp","DSC_9630.webp","DSC_9631.webp","DSC_9632.webp","DSC_9633.webp","DSC_9634.webp","DSC_9635.webp","DSC_9636.webp","DSC_9637.webp","DSC_9638.webp","DSC_9639.webp","DSC_9641.webp","DSC_9643.webp","DSC_9644.webp","DSC_9645.webp","DSC_9646.webp","DSC_9647.webp","DSC_9648.webp","DSC_9649.webp","DSC_9651.webp","DSC_9652.webp","DSC_9655.webp","DSC_9656.webp","DSC_9657.webp","DSC_9658.webp","DSC_9659.webp","DSC_9660.webp","DSC_9661.webp","DSC_9662.webp","DSC_9664.webp","DSC_9665.webp","DSC_9666.webp","DSC_9667.webp","DSC_9668.webp","DSC_9669.webp","DSC_9670.webp","DSC_9671.webp","DSC_9672.webp","DSC_9673.webp","DSC_9674.webp","DSC_9675.webp","DSC_9677.webp","DSC_9678.webp","DSC_9679.webp","DSC_9680.webp","DSC_9681.webp","DSC_9682.webp","DSC_9683.webp","DSC_9684.webp","DSC_9685.webp","DSC_9686.webp","DSC_9687.webp","DSC_9688.webp","DSC_9689.webp","DSC_9690.webp","DSC_9691.webp","DSC_9692.webp","DSC_9693.webp","DSC_9694.webp","DSC_9695.webp","DSC_9696.webp","DSC_9697.webp","DSC_9698.webp","DSC_9699.webp","DSC_9700.webp","DSC_9701.webp","DSC_9702.webp","DSC_9703.webp","DSC_9704.webp","DSC_9705.webp","DSC_9706.webp","DSC_9707.webp","DSC_9708.webp","DSC_9709.webp","DSC_9710.webp","DSC_9711.webp","DSC_9712.webp","DSC_9713.webp","DSC_9714.webp","DSC_9715.webp","DSC_9716.webp","DSC_9717.webp","DSC_9718.webp","DSC_9719.webp","DSC_9720.webp","DSC_9721.webp","DSC_9722.webp","DSC_9723.webp","DSC_9724.webp","DSC_9725.webp","DSC_9726.webp","DSC_9729.webp","DSC_9730.webp","DSC_9732.webp","DSC_9733.webp","DSC_9734.webp","DSC_9735.webp","DSC_9736.webp","DSC_9737.webp","DSC_9738.webp","DSC_9739.webp","DSC_9740.webp","DSC_9741.webp","DSC_9742.webp","DSC_9743.webp","DSC_9744.webp","DSC_9746.webp","DSC_9747.webp","DSC_9748.webp","DSC_9749.webp","DSC_9750.webp","DSC_9751.webp","DSC_9752.webp","DSC_9753.webp","DSC_9754.webp","DSC_9755.webp","DSC_9756.webp","DSC_9757.webp","DSC_9758.webp","DSC_9759.webp","DSC_9760.webp","DSC_9761.webp","DSC_9762.webp","DSC_9763.webp","DSC_9764.webp","DSC_9765.webp","DSC_9766.webp","DSC_9767.webp","DSC_9768.webp","DSC_9769.webp","DSC_9770.webp","DSC_9771.webp","DSC_9772.webp","DSC_9773.webp","DSC_9774.webp","DSC_9775.webp","DSC_9776.webp","DSC_9777.webp","DSC_9778.webp","DSC_9779.webp","DSC_9780.webp","DSC_9781.webp","DSC_9782.webp","DSC_9783.webp","DSC_9784.webp","DSC_9785.webp","DSC_9786.webp","DSC_9787.webp","DSC_9788.webp","DSC_9789.webp","DSC_9790.webp","DSC_9791.webp","DSC_9792.webp","DSC_9793.webp","DSC_9794.webp","DSC_9795.webp","DSC_9796.webp","DSC_9797.webp","DSC_9798.webp","DSC_9799.webp","DSC_9800.webp","DSC_9801.webp","DSC_9802.webp","DSC_9803.webp","DSC_9804.webp","DSC_9805.webp","DSC_9806.webp","DSC_9807.webp","DSC_9808.webp","DSC_9809.webp","DSC_9810.webp","DSC_9811.webp","DSC_9812.webp","DSC_9813.webp","DSC_9814.webp","DSC_9815.webp","DSC_9816.webp","DSC_9817.webp","DSC_9818.webp","DSC_9819.webp","DSC_9820.webp","DSC_9821.webp","DSC_9822.webp","DSC_9823.webp","DSC_9824.webp","DSC_9825.webp","DSC_9826.webp","DSC_9827.webp","DSC_9828.webp","DSC_9829.webp","DSC_9830.webp","DSC_9831.webp","DSC_9832.webp","DSC_9833.webp","DSC_9834.webp","DSC_9835.webp","DSC_9836.webp","DSC_9837.webp","DSC_9838.webp","DSC_9839.webp","DSC_9840.webp","DSC_9841.webp","DSC_9842.webp","DSC_9843.webp","DSC_9844.webp","DSC_9845.webp","DSC_9846.webp","DSC_9847.webp","DSC_9848.webp","DSC_9849.webp","DSC_9850.webp","DSC_9851.webp","DSC_9852.webp","DSC_9853.webp","DSC_9854.webp","DSC_9855.webp","DSC_9856.webp","DSC_9858.webp","DSC_9859.webp","DSC_9860.webp","DSC_9861.webp","DSC_9862.webp","DSC_9863.webp","DSC_9864.webp","DSC_9865.webp","DSC_9866.webp","DSC_9867.webp","DSC_9868.webp","DSC_9869.webp","DSC_9870.webp","DSC_9871.webp","DSC_9872.webp","DSC_9873.webp","DSC_9874.webp","DSC_9875.webp","DSC_9876.webp","DSC_9878.webp","DSC_9879.webp","DSC_9880.webp","DSC_9881.webp","DSC_9882.webp","DSC_9883.webp","DSC_9884.webp","DSC_9885.webp","DSC_9886.webp","DSC_9887.webp","DSC_9888.webp","DSC_9889.webp","DSC_9890.webp","DSC_9891.webp","DSC_9892.webp","DSC_9893.webp","DSC_9894.webp","DSC_9895.webp","DSC_9896.webp","DSC_9897.webp","DSC_9898.webp","DSC_9899.webp","DSC_9900.webp","DSC_9901.webp","DSC_9902.webp","DSC_9903.webp","DSC_9904.webp","DSC_9905.webp","DSC_9906.webp","DSC_9907.webp","DSC_9908.webp","DSC_9909.webp","DSC_9910.webp","DSC_9911.webp","DSC_9912.webp","DSC_9913.webp","DSC_9914.webp","DSC_9915.webp","DSC_9916.webp","DSC_9917.webp","DSC_9918.webp","DSC_9919.webp","DSC_9920.webp","DSC_9921.webp","DSC_9922.webp","DSC_9923.webp","DSC_9924.webp","DSC_9925.webp","DSC_9926.webp","DSC_9927.webp","DSC_9928.webp","DSC_9929.webp","DSC_9930.webp","DSC_9931.webp","DSC_9932.webp","DSC_9933.webp","DSC_9934.webp","DSC_9935.webp","DSC_9936.webp","DSC_9937.webp","DSC_9938.webp","DSC_9939.webp","DSC_9940.webp","DSC_9941.webp","DSC_9942.webp","DSC_9943.webp","DSC_9944.webp","DSC_9945.webp","DSC_9946.webp","DSC_9947.webp","DSC_9948.webp","DSC_9949.webp","DSC_9950.webp","DSC_9951.webp","DSC_9952.webp","DSC_9953.webp","DSC_9954.webp","DSC_9955.webp","DSC_9956.webp","DSC_9957.webp","DSC_9958.webp","DSC_9959.webp","DSC_9960.webp","DSC_9961.webp","DSC_9962.webp","DSC_9963.webp","DSC_9964.webp","DSC_9965.webp","DSC_9966.webp","DSC_9967.webp","DSC_9969.webp","DSC_9970.webp","DSC_9971.webp","DSC_9972.webp","DSC_9973.webp","DSC_9974.webp","DSC_9975.webp","DSC_9976.webp","DSC_9977.webp","DSC_9978.webp","DSC_9979.webp","DSC_9980.webp","DSC_9981.webp","DSC_9982.webp","DSC_9983.webp","DSC_9984.webp","DSC_9985.webp","DSC_9986.webp","DSC_9987.webp","DSC_9988.webp","DSC_9989.webp","DSC_9990.webp","DSC_9991.webp","DSC_9992.webp","DSC_9993.webp","DSC_9994.webp","DSC_9995.webp","DSC_9996.webp","DSC_9997.webp","DSC_9998.webp","DSC_9999.webp","IMG_6091.webp","IMG_6092.webp","IMG_6093.webp","IMG_6094.webp","IMG_6095.webp","IMG_6096.webp","IMG_6097.webp","IMG_6098.webp","IMG_6099.webp","IMG_6100.webp","IMG_6101.webp","IMG_6102.webp","IMG_6103.webp","IMG_6104.webp","IMG_6105.webp","IMG_6106.webp","IMG_6107.webp","IMG_6108.webp","IMG_6109.webp","IMG_6110.webp","IMG_6111.webp","IMG_6112.webp","IMG_6113.webp","IMG_6114.webp","IMG_6115.webp","IMG_6116.webp","IMG_6117.webp","IMG_6118.webp","IMG_6119.webp","IMG_6120.webp","IMG_6121.webp","IMG_6122.webp","IMG_6123.webp","IMG_6124.webp","IMG_6125.webp","IMG_6126.webp","IMG_6127.webp","IMG_6128.webp","IMG_6129.webp","IMG_6130.webp","IMG_6131.webp","IMG_6132.webp","IMG_6133.webp","IMG_6134.webp","IMG_6135.webp","IMG_6136.webp","IMG_6137.webp","IMG_6138.webp","IMG_6139.webp","IMG_6140.webp","IMG_6141.webp","IMG_6142.webp","IMG_6143.webp","IMG_6144.webp","IMG_6145.webp","IMG_6146.webp","IMG_6147.webp","IMG_6148.webp","IMG_6149.webp","IMG_6150.webp","IMG_6151.webp","IMG_6152.webp","IMG_6153.webp","IMG_6154.webp","IMG_6155.webp","IMG_6156.webp","IMG_6157.webp","IMG_6158.webp","IMG_6159.webp","IMG_6160.webp","IMG_6161.webp","IMG_6162.webp","IMG_6163.webp","IMG_6164.webp","IMG_6165.webp","IMG_6166.webp","IMG_6167.webp","IMG_6168.webp","IMG_6169.webp","IMG_6170.webp","IMG_6171.webp","IMG_6172.webp","IMG_6173.webp","IMG_6174.webp","IMG_6175.webp","IMG_6176.webp","IMG_6177.webp","IMG_6178.webp","IMG_6179.webp","IMG_6180.webp","IMG_6181.webp","IMG_6182.webp","IMG_6183.webp","IMG_6184.webp","IMG_6185.webp","IMG_6186.webp","IMG_6187.webp","IMG_6188.webp","IMG_6189.webp","IMG_6190.webp","IMG_6191.webp","IMG_6192.webp","IMG_6193.webp","IMG_6194.webp","IMG_6195.webp","IMG_6196.webp","IMG_6197.webp","IMG_6198.webp","IMG_6199.webp","IMG_6200.webp","IMG_6201.webp","IMG_6202.webp","IMG_6203.webp","IMG_6204.webp","IMG_6205.webp","IMG_6206.webp","IMG_6207.webp","IMG_6208.webp","IMG_6209.webp","IMG_6210.webp","IMG_6211.webp","IMG_6212.webp","IMG_6213.webp","IMG_6214.webp","IMG_6215.webp","IMG_6216.webp","IMG_6217.webp","IMG_6218.webp","IMG_6219.webp","IMG_6220.webp","IMG_6221.webp","IMG_6222.webp","IMG_6223.webp","IMG_6224.webp","IMG_6225.webp","IMG_6226.webp","IMG_6227.webp","IMG_6228.webp","IMG_6229.webp","IMG_6230.webp","IMG_6231.webp","IMG_6232.webp","IMG_6233.webp","IMG_6234.webp","IMG_6235.webp","IMG_6236.webp","IMG_6237.webp","IMG_6238.webp","IMG_6239.webp","IMG_6240.webp","IMG_6241.webp","IMG_6242.webp","IMG_6243.webp","IMG_6244.webp","IMG_6245.webp","IMG_6246.webp","IMG_6247.webp","IMG_6248.webp","IMG_6249.webp","IMG_6250.webp","IMG_6251.webp","IMG_6252.webp","IMG_6253.webp","IMG_6254.webp","IMG_6255.webp","IMG_6256.webp","IMG_6257.webp","IMG_6258.webp","IMG_6259.webp","IMG_6260.webp","IMG_6261.webp","IMG_6262.webp","IMG_6263.webp","IMG_6264.webp","IMG_6265.webp","IMG_6266.webp","IMG_6267.webp","IMG_6268.webp","IMG_6269.webp","IMG_6270.webp","IMG_6271.webp","IMG_6272.webp","IMG_6273.webp","IMG_6274.webp","IMG_6275.webp","IMG_6276.webp","IMG_6277.webp","IMG_6278.webp","IMG_6279.webp","IMG_6280.webp","IMG_6281.webp","IMG_6282.webp","IMG_6283.webp","IMG_6284.webp","IMG_6285.webp"
];

const photos = PHOTO_FILES.map(filename => `fotos/${filename}`);

// LIMITS FOR JADE'S PACKAGE
const LIMITS = {
    impresion: 200,   // Máximo 200 fotos para impresión
    ampliacion: 1     // Máximo 1 foto para ampliación
    // redes_sociales: sin límite
    // web: sin límite
};

const STORAGE_KEY = 'jade_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        redes_sociales: 0,
        web: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.web) stats.web++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Update counters
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countWeb').textContent = stats.web;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Add warning class if limits exceeded
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITS.ampliacion) {
            ampliacionCard.classList.add('exceeded');
        } else {
            ampliacionCard.classList.remove('exceeded');
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITS.impresion) {
            impresionCard.classList.add('exceeded');
        } else {
            impresionCard.classList.remove('exceeded');
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.redes_sociales) categories.push('redes_sociales');
            if (selection.web) categories.push('web');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales">📱 Redes</span>';
            if (selection.web) badgesHTML += '<span class="badge badge-web">🌐 Web</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'ampliacion':
            show = selection.ampliacion === true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes-sociales':
            show = selection.redes_sociales === true;
            break;
        case 'web':
            show = selection.web === true;
            break;
        case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin-clasificar':
            show = !selection.ampliacion && !selection.impresion && !selection.redes_sociales && !selection.web && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    console.log('Setting filter to:', filter);
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion}/${LIMITS.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion}/${LIMITS.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes (${stats.redes_sociales})`;
    document.getElementById('btnFilterWeb').textContent = `Web (${stats.web})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    let newIndex = startIndex;
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    } else { // 'prev'
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    // Update navigation button states
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;

    const savedSelection = photoSelections[currentPhotoIndex] || {};
    const currentSelection = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        currentSelection[btn.dataset.category] = true;
    });

    const savedKeys = Object.keys(savedSelection).filter(k => savedSelection[k]);
    const currentKeys = Object.keys(currentSelection);

    if (savedKeys.length !== currentKeys.length) return true;

    const allKeys = new Set([...savedKeys, ...currentKeys]);

    for (const key of allKeys) {
        if (!!savedSelection[key] !== !!currentSelection[key]) {
            return true;
        }
    }

    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const proceed = () => {
        const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

        if (newIndex !== null) {
            currentPhotoIndex = newIndex;
            const modalImage = document.getElementById('modalImage');
            const modalPhotoNumber = document.getElementById('modalPhotoNumber');

            modalImage.src = photos[newIndex];
            modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

            const selection = photoSelections[newIndex] || {};
            document.querySelectorAll('.option-btn').forEach(btn => {
                const category = btn.dataset.category;
                btn.classList.toggle('selected', selection[category] === true);
            });

            updateNavigationButtons();
        }
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de continuar?')) {
            saveModalSelection(proceed);
        } else {
            proceed();
        }
    } else {
        proceed();
    }
}

function closeModal() {
    const doClose = () => {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentPhotoIndex = null;
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de salir?')) {
            saveModalSelection(doClose);
        } else {
            doClose();
        }
    } else {
        doClose();
    }
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');

    if (callback && typeof callback === 'function') {
        callback();
    } else {
        closeModal();
    }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        INSTRUCCIONES: '⚠️ IMPORTANTE: Por favor envía este archivo por WhatsApp al 4779203776',
        whatsapp: '4779203776',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.redes_sociales || selection.web || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: PHOTO_FILES[index],
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                web: selection.web || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-isis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('📥 Reporte descargado. ¡Envíalo por WhatsApp al 4779203776!', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS ISIS FRANCIA SARABI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para web: ${stats.web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'redes_sociales', 'web', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        web: '🌐 WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    summary += `\n📱 WhatsApp: 477-920-3776\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes-sociales'));
    document.getElementById('btnFilterWeb').addEventListener('click', () => setFilter('web'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes-sociales';
    document.getElementById('btnFilterWeb').dataset.filter = 'web';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // If selecting descartada, deselect all others
            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            // If selecting any other, deselect descartada
            if (category !== 'descartada' && !isCurrentlySelected) {
                document.querySelector('.option-btn[data-category="descartada"]').classList.remove('selected');
            }

            btn.classList.toggle('selected');

            // Show warning if exceeding recommended limit
            if (!isCurrentlySelected && LIMITS[category]) {
                const stats = getStats();
                const futureCount = stats[category] + 1;
                if (futureCount > LIMITS[category]) {
                    const messages = {
                        impresion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para impresión (se recomiendan ${LIMITS.impresion})`,
                        ampliacion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para ampliación (se recomienda ${LIMITS.ampliacion})`
                    };
                    showToast(messages[category], 'warning');
                }
            }
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation button click handlers
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) {
        btnPrevPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('prev');
        });
    }

    if (btnNextPhoto) {
        btnNextPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('next');
        });
    }

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// PROTECCIÓN DE IMÁGENES
// ========================================
// Bloquear click derecho en todas las imágenes
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showToast('Las imágenes están protegidas', 'warning');
        return false;
    }
});

// Prevenir arrastrar imágenes
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevenir selección de imágenes
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
