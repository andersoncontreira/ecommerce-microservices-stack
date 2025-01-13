{{- define "api-mock.name" -}}
{{- .Chart.Name -}}
{{- end -}}
{{- define "api-mock.fullname" -}}
{{/*{{- printf "%s-%s" .Chart.Name .Release.Name -}}*/}}
{{- .Release.Name -}}
{{- end -}}
{{- define "api-mock.chart" -}}
{{- "api-mock-chat" -}}
{{- end -}}