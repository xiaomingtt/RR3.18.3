<?php
/* 共赢源码 bbs.mswiner.com */
if (!defined('IN_IA')) {
	exit('Access Denied');
}

class Index_EweiShopV2Page extends PluginWebPage
{
	public function main()
	{
		global $_W;
		include $this->template();
	}
}

?>
