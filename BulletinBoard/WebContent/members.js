/**
 * 
 */

function infoConfirm() {
	if(document.reg_frm.id.value.length == 0) {
		alert("�ƾƵ�� �� �� �����Դϴ�.");
		reg_frm.id.focus();
		return;
	}
	
	if(document.reg_frm.id.value.length < 4) {
		alert("�ƾƵ�� 4���� �̻��̾�� �Ϻ�ϴ�.");
		reg_frm.id.focus();
		return;
	}
	
	if(document.reg_frm.pw.value.length == 0) {
		alert("��й�ȣ�� �� �� �����Դϴ�.");
		reg_frm.pw.focus();
		return;
	}
	
	if(document.reg_frm.pw.value != document.reg_frm.pw_check.value) {
		alert("��й�ȣ�� ��ġ���� �ʽ��ϴ�.");
		reg_frm.pw.focus();
		return;
	}
	
	if(document.reg_frm.name.value.length == 0) {
		alert("�̸��� �� �� �����Դϴ�.");
		reg_frm.name.focus();
		return;
	}
	
	if(document.reg_frm.id.value.length == 0) {
		alert("�ƾƵ�� �� �� �����Դϴ�.");
		reg_frm.id.focus();
		return;
	}
	
	document.reg_frm.submit();
}
