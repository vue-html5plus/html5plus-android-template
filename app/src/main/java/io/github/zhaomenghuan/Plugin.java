package io.github.zhaomenghuan;

import android.widget.Toast;
import org.json.JSONArray;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;
import io.dcloud.common.util.JSUtil;

public class Plugin extends StandardFeature {

    public void showToast(IWebview pWebview, JSONArray array) {
        String message = array.optString(0);
        Toast.makeText(pWebview.getActivity(), message, Toast.LENGTH_SHORT).show();
        JSUtil.execCallback(pWebview, null, "plugin callback Ok", JSUtil.OK, false);
    }
}
