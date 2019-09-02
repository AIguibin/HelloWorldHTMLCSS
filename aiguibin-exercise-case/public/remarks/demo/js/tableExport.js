function createPhysicalCategory(obj) {
    var html = '<div class="row" style="height:100%;background-color:#fff;">\n' +
        '                            <!--区域1-->\n' +
        '                            <div class="col-md-2"\n' +
        '                                 style="padding-left: 1%;height:100%;">\n' +
        '\n' +
        '                                <div class="col-md-12" style="height:50%;">\n' +
        '                                    <div style="margin:-2% 0% -34px 0%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 32px"><span>'+obj.categoryCluster+'</span></b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">集群(台)</span>\n' +
        '\n' +
        '                                </div>\n' +
        '                                <div class="col-md-12" style="height:50%;">\n' +
        '                                    <div style="margin:-9% 0% -34px 0%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 32px">'+obj.categoryHost+'</b>\n' +
        '                                    </div>\n' +
        '\n' +
        '                                    <span style="color: #444444b5;">物理机(台)</span>\n' +
        '\n' +
        '                                </div>\n' +
        '\n' +
        '                            </div>\n' +
        '                            <!--区域2-->\n' +
        '\n' +
        '                            <div class=" col-md-2 "\n' +
        '                                 style="padding:0% 2%;height:100%;">\n' +
        '                                <!--内容一-->\n' +
        '                                <div class="col-md-12" style="overflow: hidden;height:100%;">\n' +
        '                                    <div style="margin: 20% 0% -22% 0%">\n' +
        '                                        <b style="font-weight: 500;font-size: 32px">'+obj.categoryVm_usage+'</b><b\n' +
        '                                            style="font-size: 18px;font-weight: 300">/<span>'+obj.categoryVm_total+'</span></b><br/>\n' +
        '                                    </div>\n' +
        '\n' +
        '                                    <span style="margin-top: 7%;color: #444444b5;display: inline-block;">虚机(已纳管/总数)</span>\n' +
        '\n' +
        '                                    <div class="progress progress-striped active"\n' +
        '                                         style="height:8px; margin:15% 0 0 0;">\n' +
        '                                        <div class="progress-bar" style="width: '+obj.categoryVm_ratio+'%">\n' +
        '                                            <span class="sr-only">'+obj.categoryVm_ratio+'% Complete</span>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <!--区域3-->\n' +
        '                            <div class="col-md-5 " style="height:100%;">\n' +
        '                                <!--内容一-->\n' +
        '                                <div class="col-md-6" style="text-align: center;height:100%;">\n' +
        '                                    <div class="col-md-12" style="height:100%;">\n' +
        '                                        <a href="#" class="shortcut-link" style="margin-right:0px;line-height:2;margin-top:20%;">\n' +
        '                                            <span class="shortcut-icon">\n' +
        '                                                <i class="fa fa-microchip" style="font-size: 38px;"></i>\n' +
        '                                            </span>\n' +
        '                                        </a>\n' +
        '                                        <div style="line-height:1.5">\n' +
        '                                            <b style="font-weight: 500;font-size: 24px">'+obj.categoryMemory_usage+'</b><b>/'+obj.categoryMemory_total+'</b>\n' +
        '                                            <p style="margin:3px 0 0;">内存(GB)</p><span>(已置备/总计)</span>\n' +
        '                                            \n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <!--内容二-->\n' +
        '                                <div class="col-md-6" style="text-align: center;height:100%;">\n' +
        '                                    <div class="col-md-12" style="height:100%;">\n' +
        '                                        <a href="#" class="shortcut-link" style="margin-right:0px;line-height:2;margin-top:20%;">\n' +
        '                                            <span class="shortcut-icon">\n' +
        '                                                <i class="fa fa-hdd-o" style="font-size: 38px;"></i>\n' +
        '                                            </span>\n' +
        '                                        </a>\n' +
        '                                        <div style="line-height:1.5">\n' +
        '                                            <b style="font-weight: 500;font-size: 24px">'+obj.categoryStorage_usage+'</b><b>/'+obj.categoryStorage_total+'</b>\n' +
        '                                            <p style="margin:3px 0 0;">存储(GB)</p>\n' +
        '                                            <span>(已置备/总计)</span>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <!--区域4-->\n' +
        '                            <div class=" col-md-3 "\n' +
        '                                 style="text-align: center;height:100%;">\n' +
        '                                <!--内容一-->\n' +
        '                                <div class="col-md-6" style="height:50%;">\n' +
        '                                    <div style="margin: 15% 0% -17% 0%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px"><span>'+obj.categoryReservation+'</span></b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">预留</span>\n' +
        '                                </div>\n' +
        '                                <!--内容二-->\n' +
        '                                <div class="col-md-6" style="height:50%;">\n' +
        '                                    <div style="margin: 15% 0% -17% 0%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px"><span>'+obj.categoryBlueprint+'</span></b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">模板</span>\n' +
        '                                </div>\n' +
        '                                <!--内容三-->\n' +
        '                                <div class="col-md-12" style="height:50%;">\n' +
        '                                    <div style="margin: -10% 0% -24px 2%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px">'+obj.categoryIp_usage+'</b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;margin-left: 2%;">IP(已使用)</span>\n' +
        '\n' +
        '                                </div>\n' +
        '\n' +
        '                            </div>\n' +
        '                        </div>';
    return html;
}

function createSystemCategory(obj) {
    var html = '<div class="row" style="height: 100%;background:#fff">\n' +
        '                            <!--区域1-->\n' +
        '                            <div class="col-md-2 "\n' +
        '                                 style="height: 100%;padding-left: 1%">\n' +
        '                                <div class="col-md-12" style="height: 50%;">\n' +
        '                                    <div style="margin: -2% 0% -34px 0%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 32px">'+obj.categoryApp_system+'</b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">应用系统</span>\n' +
        '\n' +
        '                                </div>\n' +
        '                                <div class="col-md-12" style="height: 50%">\n' +
        '                                    <div style="margin: -9% 0% -34px 0%">\n' +
        '                                        <b style="font-weight: 500;font-size: 32px">'+obj.categoryVm_usage+'</b><b\n' +
        '                                            style="font-size: 18px;font-weight: 300">/<span>无限制</span></b><br/>\n' +
        '                                    </div>\n' +
        '\n' +
        '                                    <span style="color: #444444b5;">虚机(已部署/配额)</span>\n' +
        '                                </div>\n' +
        '\n' +
        '                            </div>\n' +
        '                            <!--区域2-->\n' +
        '                            <div class="col-md-4" style="height: 100%">\n' +
        '                                <!--内容一-->\n' +
        '                                <div class="col-md-6" style="text-align: center; height: 100%;">\n' +
        '                                    <div class="col-md-12" style="margin: 9% 0% -9% 0%;height: 100%;">\n' +
        '                                        <a href="#" class="shortcut-link" style="margin-right:0px;">\n' +
        '                                            <span class="shortcut-icon">\n' +
        '                                                <i class="fa fa-microchip" style="font-size: 38px;"></i>\n' +
        '                                            </span>\n' +
        '                                        </a>\n' +
        '                                        <div style="line-height:1.5">\n' +
        '                                            <b style="font-weight: 500;font-size: 24px">'+obj.categoryMemory_usage+'</b><b\n' +
        '                                                style="font-weight: 300;">/无限制</b>\n' +
        '                                            <p>内存(GB)</p>\n' +
        '                                            <span>(已分配/配额)</span>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <!--内容二-->\n' +
        '                                <div class="col-md-6" style="text-align: center;height: 100%;">\n' +
        '                                    <div class="col-md-12" style="margin: 9% 0% -9% 0%;height: 100%;">\n' +
        '                                        <a href="#" class="shortcut-link" style="margin-right:0px;">\n' +
        '                                            <span class="shortcut-icon">\n' +
        '                                                <i class="fa fa-hdd-o" style="font-size: 38px;"></i>\n' +
        '                                            </span>\n' +
        '                                        </a>\n' +
        '                                        <div style="line-height:1.5">\n' +
        '                                            <b style="font-weight: 500;font-size: 24px">'+obj.categoryStorage_usage+'</b><b\n' +
        '                                                style="font-weight: 300;">/无限制</b><br/>\n' +
        '                                            <p>存储(GB)</p>\n' +
        '                                            <span>(已分配/配额)</span>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <!--区域3-->\n' +
        '                            <div class=" col-md-2 "\n' +
        '                                 style="height: 100%;padding:0% 2%;">\n' +
        '                                <!--内容一-->\n' +
        '                                <div class="col-md-12" style="margin-top:13%;height: 100%;">\n' +
        '                                    <div style="margin: -2% 0% -20% 2%;">\n' +
        '                                        <b style="font-weight: 500;font-size: 32px">'+obj.categoryIp_usage+'</b><b\n' +
        '                                            style="font-size: 18px;font-weight: 300">/'+obj.categoryIp_total+'</b><br/>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;margin-left: 2%;">IP(已使用/总计)</span>\n' +
        '\n' +
        '                                    <div class="progress progress-striped active"\n' +
        '                                         style="height:8px; margin:20% 0 0 0;">\n' +
        '                                        <div class="progress-bar" style="width: '+obj.categoryIp_ratio+'%">\n' +
        '                                            <span class="sr-only">'+obj.categoryIp_ratio+'% Complete</span>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <!--区域4-->\n' +
        '                            <div class=" col-md-4 "\n' +
        '                                 style="text-align: center;height: 100%;">\n' +
        '                                <!--内容一-->\n' +
        '                                <div class="col-md-4" style="height: 50%;">\n' +
        '                                    <div style="position: relative;top: 20px;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px"><span>'+obj.categoryTenant+'</span></b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">租户</span>\n' +
        '                                </div>\n' +
        '                                <!--内容二-->\n' +
        '                                <div class="col-md-4" style="height: 50%;">\n' +
        '                                    <div style="position: relative;top:20px;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px"><span>'+obj.categoryGroup+'</span></b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">部门</span>\n' +
        '                                </div>\n' +
        '\n' +
        '                                <!--内容三-->\n' +
        '                                <div class="col-md-4" style="height: 50%;">\n' +
        '                                    <div style="position: relative;top:20px;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px"><span>'+obj.categoryUser+'</span></b>\n' +
        '                                    </div>\n' +
        '                                    <span style="color: #444444b5;">用户</span>\n' +
        '                                </div>\n' +
        '                                <!--内容六-->\n' +
        '                                <div class="col-md-4" style="height: 50%;">\n' +
        '                                    <div style="position: relative;top:-9px;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px">'+obj.categoryApplication_normal+'</b><b\n' +
        '                                            style="font-size: 15px;font-weight: 300">/<span>'+obj.categoryApplication_total+'</span></b><br/>\n' +
        '                                    </div>\n' +
        '                                    <div style="color: #444444b5;">\n' +
        '                                        <div style="position: relative;top: -40px;">申请单</div>\n' +
        '                                        <div style="position: relative;top: -60px;">(正常/总计)</div>\n' +
        '                                    </div>\n' +
        '\n' +
        '                                </div>\n' +
        '                                <!--内容七-->\n' +
        '                                <div class="col-md-4" style="height: 50%;">\n' +
        '                                    <div style="position: relative;top:-9px;">\n' +
        '                                        <b style="font-weight: 500;font-size: 24px">'+obj.categoryCost_daily+'</b><b\n' +
        '                                            style="font-size: 15px;font-weight: 300">/<span>'+obj.categoryCost_total+'</span></b><br/>\n' +
        '                                    </div>\n' +
        '                                    <div style="color: #444444b5;">\n' +
        '                                        <div style="position: relative;top: -40px;">费用(万元)</div>\n' +
        '                                        <div style="position: relative;top: -60px;">(当天/总计)</div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>';
    return html;
}