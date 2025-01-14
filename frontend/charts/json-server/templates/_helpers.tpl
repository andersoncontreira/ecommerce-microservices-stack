{{- define "json-server.name" -}}
{{- .Chart.Name -}}
{{- end -}}
{{- define "json-server.fullname" -}}
{{/*{{- printf "%s-%s" .Chart.Name .Release.Name -}}*/}}
{{- .Release.Name -}}
{{- end -}}
{{- define "json-server.chart" -}}
{{- "json-server-chat" -}}
{{- end -}}